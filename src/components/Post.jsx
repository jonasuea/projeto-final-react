import { useState, useRef, useEffect } from 'react';
import './Post.css';

// Lista de reações possíveis, cada uma com seu identificador,
// emoji e rótulo. Ter isso como uma lista (em vez de repetir
// código para cada reação) facilita adicionar/remover reações depois.
const REACOES = [
  { id: 'curtir', emoji: '👍', label: 'Curtir' },
  { id: 'amei', emoji: '❤️', label: 'Amei' },
  { id: 'haha', emoji: '😆', label: 'Haha' },
  { id: 'uau', emoji: '😮', label: 'Uau' },
  { id: 'triste', emoji: '😢', label: 'Triste' },
  { id: 'grr', emoji: '😠', label: 'Grr' },
];

export default function Post({
  autor = 'Nome do Autor',
  avatarUrl,
  dataPublicacao = 'Agora mesmo',
  legenda = '',
  imagemUrl,
}) {
  // Contagem de cada reação. Começa tudo zerado.
  // Ex.: { curtir: 0, amei: 0, haha: 0, uau: 0, triste: 0, grr: 0 }
  const [contagens, setContagens] = useState(
    Object.fromEntries(REACOES.map((r) => [r.id, 0]))
  );

  // Guarda qual reação o usuário atual escolheu (ou null, se nenhuma).
  // Isso evita que a mesma pessoa curta e "ame" ao mesmo tempo —
  // só uma reação ativa por vez, como no Facebook.
  const [reacaoAtiva, setReacaoAtiva] = useState(null);

  // Controla se o menu de reações (que aparece ao passar o mouse,
  // ou ao segurar o dedo no mobile) está visível ou não.
  const [menuAberto, setMenuAberto] = useState(false);

  // Referência pro "container" das ações (botão + menu), usada pra
  // detectar cliques FORA dele e assim poder fechar o menu.
  const acoesRef = useRef(null);

  // Guarda o ID do timer do hover (mouse parado sobre o botão),
  // pra podermos cancelá-lo se o cursor sair antes dos 2 segundos.
  const timerHover = useRef(null);

  // Guarda o ID do timer do "segurar o dedo" (long press), pra
  // podermos cancelá-lo se o dedo for solto antes da hora.
  const timerLongPress = useRef(null);

  // Marca se o long press já disparou nesse toque — usado pra evitar
  // que, ao soltar o dedo depois de um long press, o navegador dispare
  // também um "click" e acabe selecionando "curtir" sem querer.
  const longPressDisparou = useRef(false);

  // Fecha o menu se o usuário clicar em qualquer lugar FORA da área
  // de ações. Sem isso, no mobile não haveria como desistir de reagir
  // depois de abrir o menu por long-press.
  useEffect(() => {
    if (!menuAberto) return;

    function handleClickFora(e) {
      if (acoesRef.current && !acoesRef.current.contains(e.target)) {
        setMenuAberto(false);
      }
    }

    document.addEventListener('mousedown', handleClickFora);
    document.addEventListener('touchstart', handleClickFora);

    // Limpeza: remove os listeners quando o menu fechar ou o
    // componente for desmontado, pra não acumular listeners extras.
    return () => {
      document.removeEventListener('mousedown', handleClickFora);
      document.removeEventListener('touchstart', handleClickFora);
    };
  }, [menuAberto]);

  // --- Eventos de MOUSE (desktop) ---
  function handleMouseEnter() {
    // Igual ao Facebook: o menu só aparece se o cursor ficar PARADO
    // sobre o botão por 2 segundos — passar rápido por cima não conta.
    timerHover.current = setTimeout(() => {
      setMenuAberto(true);
    }, 400);
  }

  function handleMouseLeave() {
    // Se o cursor sair antes dos 2 segundos completarem, cancelamos
    // o timer — o menu nem chega a abrir. Se o menu JÁ estava aberto,
    // não fazemos nada aqui: ele só fecha ao escolher uma reação ou
    // ao clicar fora (comportamento definido na versão anterior).
    clearTimeout(timerHover.current);
  }

  // --- Eventos de TOQUE (mobile) ---
  function handleTouchStart() {
    longPressDisparou.current = false;
    // Espera 400ms com o dedo parado antes de considerar "long press".
    // Um toque rápido (tap normal) não chega a disparar isso.
    timerLongPress.current = setTimeout(() => {
      longPressDisparou.current = true;
      setMenuAberto(true);
    }, 400);
  }

  function handleTouchEnd() {
    clearTimeout(timerLongPress.current);
  }

  // No botão principal, um toque rápido deve funcionar como um clique
  // normal (curtir). Mas se o long press já abriu o menu, ignoramos
  // esse clique — senão o "curtir" seria aplicado por engano ao soltar
  // o dedo depois de escolher pelo menu.
  function handleCliqueBotaoPrincipal() {
    if (longPressDisparou.current) {
      longPressDisparou.current = false;
      return;
    }
    escolherReacao('curtir');
  }

  function escolherReacao(idReacao) {
    setContagens((prev) => {
      const novo = { ...prev };

      // Se já havia uma reação ativa, remove 1 dela primeiro.
      if (reacaoAtiva) {
        novo[reacaoAtiva] = Math.max(0, novo[reacaoAtiva] - 1);
      }

      // Se o usuário clicou na MESMA reação que já estava ativa,
      // interpretamos como "desfazer a reação" (não soma de novo).
      if (reacaoAtiva === idReacao) {
        setReacaoAtiva(null);
      } else {
        novo[idReacao] = novo[idReacao] + 1;
        setReacaoAtiva(idReacao);
      }

      return novo;
    });

    setMenuAberto(false);
  }

  // Total de reações somando todos os tipos — usado no resumo acima
  // dos botões (ex.: "👍❤️ 12").
  const totalReacoes = Object.values(contagens).reduce((soma, n) => soma + n, 0);

  // Lista só das reações que têm pelo menos 1 contagem, ordenadas da
  // maior pra menor. É o que aparece como "resumo" (ex.: os emojis
  // mais usados aparecem primeiro).
  const reacoesComContagem = REACOES.filter((r) => contagens[r.id] > 0).sort(
    (a, b) => contagens[b.id] - contagens[a.id]
  );

  // Dados da reação ativa (usado para colorir/rotular o botão principal).
  const dadosReacaoAtiva = REACOES.find((r) => r.id === reacaoAtiva);

  return (
    <div className="post-card">
      {/* Cabeçalho: avatar, nome do autor e data */}
      <div className="post-header">
        <img
          className="post-avatar"
          src={avatarUrl || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFSKobu3L-aZFkAn9I5BAv_8kZBMRQKIz2OaDNpzuBkkHiz8ILSF1xso&s=10'}
          alt={`Foto de perfil de ${autor}`}
        />
        <div>
          <p className="post-autor">{autor}</p>
          <p className="post-data">{dataPublicacao}</p>
        </div>
      </div>

      {/* Legenda: só renderiza o parágrafo se houver texto */}
      {legenda && <p className="post-legenda">{legenda}</p>}

      {/* Foto do post: só renderiza se uma imagem foi passada por prop */}
      {imagemUrl && (
        <img className="post-imagem" src={imagemUrl} alt="Imagem do post" />
      )}

      {/* Resumo de reações (ex.: emojis + total), só aparece se
          houver pelo menos 1 reação */}
      {totalReacoes > 0 && (
        <div className="post-resumo-reacoes">
          <span className="post-resumo-emojis">
            {reacoesComContagem.map((r) => r.emoji).join('')}
          </span>
          <span className="post-resumo-total">{totalReacoes}</span>
        </div>
      )}

      <hr className="post-divisor" />

      {/* Área do botão principal + menu flutuante de reações.
          - Desktop: manter o cursor 2s parado sobre o botão abre o menu.
          - Mobile: segurar o dedo (long press) abre o menu.
          - Em ambos os casos, o menu só fecha ao escolher uma
            reação ou ao tocar/clicar fora dele (ver useEffect acima). */}
      <div
        className="post-acoes"
        ref={acoesRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {menuAberto && (
          <div className="post-menu-reacoes">
            {REACOES.map((r) => (
              <button
                key={r.id}
                className="post-menu-reacao-botao"
                title={r.label}
                onClick={() => escolherReacao(r.id)}
              >
                {r.emoji}
              </button>
            ))}
          </div>
        )}

        <button
          className={`post-botao-curtir ${reacaoAtiva ? 'ativo' : ''}`}
          onClick={handleCliqueBotaoPrincipal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <span>{dadosReacaoAtiva ? dadosReacaoAtiva.emoji : '👍'}</span>
          {dadosReacaoAtiva ? dadosReacaoAtiva.label : 'Curtir'}
        </button>
      </div>
    </div>
  );
}
