
import { LearningModule, ModuleType } from './types';

export const modules: LearningModule[] = [
  {
    id: 'mod_nlp',
    title: 'PLN & Word2Vec',
    type: ModuleType.NLP,
    description: 'Fundamentos de Processamento de Linguagem Natural, Embeddings e Word2Vec.',
    icon: 'Type',
    summary: `
      <h3 class="text-xl font-bold mb-2">Processamento de Linguagem Natural (PLN)</h3>
      <p class="mb-4">O PLN é o campo da IA que visa fazer computadores entenderem a linguagem humana. Historicamente difícil devido à falta de contexto dos computadores, o PLN evoluiu com técnicas de Aprendizado de Máquina.</p>
      
      <h4 class="text-lg font-semibold mb-2">Pré-processamento</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Tokenização:</strong> Divisão do texto em unidades (tokens), como palavras.</li>
        <li><strong>Stopwords:</strong> Remoção de palavras comuns (e, a, de) que têm baixo valor semântico.</li>
        <li><strong>Stemming/Lematização:</strong> Redução de palavras à sua raiz (ex: correndo -> correr).</li>
        <li><strong>Normalização:</strong> Converter tudo para minúsculas para padronizar o vocabulário.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">Embeddings e Word2Vec</h4>
      <p class="mb-2">Embeddings são representações vetoriais densas onde palavras semanticamente similares ficam próximas no espaço matemático. Isso permite cálculos como <em>Rei - Homem + Mulher = Rainha</em>.</p>
      <p class="mb-4">O <strong>Word2Vec</strong> aprende esses vetores prevendo palavras. Possui duas arquiteturas principais:</p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>CBOW (Continuous Bag of Words):</strong> Prevê a palavra central com base no contexto (vizinhos). Mais rápido.</li>
        <li><strong>Skip-Gram:</strong> Prevê o contexto (vizinhos) com base na palavra central. Melhor para palavras raras.</li>
      </ul>
      
      <h4 class="text-lg font-semibold mb-2">Transformers e BERT</h4>
      <p>Modelos modernos como BERT usam mecanismos de <strong>Atenção</strong> para entender o contexto de forma bidirecional (olhando para trás e para frente na frase simultaneamente), superando limitações sequenciais.</p>
    `,
    flashcards: [
      { id: 'f1', front: 'O que é Word2Vec?', back: 'Mapeia palavras de um vocabulário para vetores de números reais, aproximando palavras semanticamente similares.' },
      { id: 'f2', front: 'CBOW (Continuous Bag of Words)', back: 'Modelo que tenta prever a palavra central com base no contexto (palavras vizinhas).' },
      { id: 'f3', front: 'Skip-Gram', back: 'Modelo que tenta prever o contexto (palavras vizinhas) com base em uma palavra central.' },
      { id: 'f4', front: 'Stopwords', back: 'Palavras comuns (e, a, de, o) que são geralmente removidas no pré-processamento pois carregam pouco significado semântico.' },
      { id: 'f5', front: 'Tokenização', back: 'Processo de dividir um texto em unidades menores, chamadas tokens (ex: palavras).' },
      { id: 'f6', front: 'BERT', back: 'Bidirectional Encoder Representations from Transformers. Usa atenção para entender o contexto bidirecionalmente.' },
      { id: 'f7', front: 'Stemming', back: 'Técnica que reduz a palavra ao seu radical (ex: "livraria" -> "livr"). Pode gerar palavras não existentes.' },
      { id: 'f8', front: 'Lematização', back: 'Reduz a palavra à sua forma canônica ou raiz válida no dicionário (ex: "foi" -> "ir").' },
      { id: 'f9', front: 'Embeddings', back: 'Representação vetorial densa de dados (palavras) onde a distância reflete similaridade semântica.' },
      { id: 'f10', front: 'Distância do Cosseno', back: 'Medida utilizada para calcular a similaridade entre dois vetores (varia de -1 a 1).' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Qual a principal diferença entre CBOW e Skip-Gram?',
        options: [
          'CBOW prevê o contexto; Skip-Gram prevê a palavra central.',
          'CBOW prevê a palavra central pelo contexto; Skip-Gram prevê o contexto pela palavra central.',
          'CBOW é usado apenas para imagens.',
          'Não há diferença.'
        ],
        correctAnswerIdx: 1,
        explanation: 'O CBOW olha para os vizinhos para adivinhar o centro. O Skip-Gram olha para o centro para adivinhar os vizinhos.'
      },
      {
        id: 'q2',
        question: 'O que a Distância do Cosseno mede em Embeddings?',
        options: [
          'A diferença de tamanho entre vetores.',
          'A similaridade entre dois vetores baseada no ângulo entre eles.',
          'A contagem de palavras.',
          'O erro da rede neural.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Varia de -1 a 1, onde 1 indica vetores muito semelhantes (mesma direção) e 0 indica ortogonalidade (sem relação).'
      },
      {
        id: 'q3',
        question: 'O que são "Stopwords" em PLN?',
        options: [
          'Palavras que param o processamento do código.',
          'Palavras raras e importantes.',
          'Palavras comuns (artigos, preposições) que geralmente são removidas.',
          'Erros de digitação.'
        ],
        correctAnswerIdx: 2,
        explanation: 'Stopwords como "e", "de", "a" aparecem muito mas trazem pouco valor semântico específico para classificação.'
      },
      {
        id: 'q4',
        question: 'No contexto de Word2Vec, o que é "One-Hot Encoding"?',
        options: [
          'Uma técnica onde cada palavra é um vetor cheio de zeros e apenas um 1.',
          'Uma técnica de aquecimento da GPU.',
          'Um vetor denso de números reais.',
          'Um método de tradução.'
        ],
        correctAnswerIdx: 0,
        explanation: 'É uma representação esparsa que não captura similaridade semântica, ao contrário dos embeddings densos.'
      },
      {
        id: 'q5',
        question: 'O que o cálculo "Rei - Homem + Mulher" resulta em embeddings bem treinados?',
        options: [
          'Príncipe',
          'Rainha',
          'Castelo',
          'Nada faz sentido.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Os vetores capturam relações semânticas, permitindo aritmética vetorial onde a relação de gênero é preservada.'
      },
      {
        id: 'q6',
        question: 'Qual o objetivo da Tokenização?',
        options: [
          'Transformar texto em imagens.',
          'Dividir o texto em unidades menores (palavras ou sub-palavras).',
          'Remover a pontuação apenas.',
          'Traduzir o texto.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A tokenização é o primeiro passo para transformar texto livre em dados estruturados para o modelo.'
      },
      {
        id: 'q7',
        question: 'O que é Stemming?',
        options: [
          'Reduzir a palavra ao seu radical (ex: correndo -> corr).',
          'Encontrar o sinônimo da palavra.',
          'Traduzir para inglês.',
          'Corrigir a ortografia.'
        ],
        correctAnswerIdx: 0,
        explanation: 'Stemming é um processo heurístico de corte de sufixos para agrupar variantes da mesma palavra.'
      },
      {
        id: 'q8',
        question: 'Qual modelo de linguagem moderno usa o conceito de "Atenção"?',
        options: [
          'Word2Vec simples',
          'Bag of Words',
          'BERT / Transformers',
          'Regressão Linear'
        ],
        correctAnswerIdx: 2,
        explanation: 'BERT e Transformers revolucionaram a área usando mecanismos de atenção para entender contexto profundo.'
      },
      {
        id: 'q9',
        question: 'O que significa um valor de cosseno próximo de 0 entre dois vetores de palavras?',
        options: [
          'São sinônimos.',
          'São opostos (antônimos).',
          'Não têm correlação linear (são ortogonais).',
          'É um erro de cálculo.'
        ],
        correctAnswerIdx: 2,
        explanation: 'Zero indica que os vetores estão a 90 graus, ou seja, não compartilham contexto semântico no espaço vetorial.'
      },
      {
        id: 'q10',
        question: 'Qual a vantagem de Skip-Gram sobre CBOW?',
        options: [
          'É mais rápido para treinar.',
          'Funciona melhor com palavras raras e pouco frequentes.',
          'Usa menos memória.',
          'Não precisa de GPU.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Como o Skip-Gram trata cada par contexto-alvo separadamente, ele aprende melhor representações para palavras raras.'
      },
      {
        id: 'q11',
        question: 'O que é Lematização?',
        options: [
          'O mesmo que Stemming.',
          'Reduzir a palavra à sua forma de dicionário (lema) considerando a gramática.',
          'Remover letras duplicadas.',
          'Transformar tudo em maiúsculo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Diferente do Stemming, a lematização garante que a palavra resultante exista na língua (ex: "foi" -> "ir").'
      },
      {
        id: 'q12',
        question: 'O que é NLTK?',
        options: [
          'Um novo tipo de rede neural.',
          'Uma biblioteca popular de Python para Processamento de Linguagem Natural.',
          'Um banco de dados.',
          'Um algoritmo de visão computacional.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Natural Language Toolkit é a biblioteca padrão para ensino e prototipagem em PLN.'
      },
      {
        id: 'q13',
        question: 'O que é "Janela de Contexto" no Word2Vec?',
        options: [
          'O sistema operacional usado.',
          'O número de palavras vizinhas consideradas à esquerda e à direita da palavra alvo.',
          'O tempo que o modelo leva para treinar.',
          'A interface gráfica do programa.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A janela define o escopo de "vizinhança". Uma janela de 2 olha para 2 palavras antes e 2 depois.'
      },
      {
        id: 'q14',
        question: 'Por que normalizamos o texto para minúsculas (lowercase)?',
        options: [
          'Porque o computador só lê minúsculas.',
          'Para reduzir o vocabulário, tratando "Casa" e "casa" como a mesma palavra.',
          'Para economizar tinta.',
          'Não se deve fazer isso nunca.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Isso evita que o modelo trate a mesma palavra como duas entidades diferentes só por causa da capitalização.'
      },
      {
        id: 'q15',
        question: 'O que é um "Corpus" em PLN?',
        options: [
          'O corpo humano.',
          'O conjunto total de documentos/textos usados para treinar o modelo.',
          'Um erro de programação.',
          'A camada de saída da rede.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Corpus é a coleção de dados textuais brutos utilizados no aprendizado.'
      }
    ]
  },
  {
    id: 'mod_nn',
    title: 'Redes Neurais (Feedforward)',
    type: ModuleType.NN_BASICS,
    description: 'Conceitos de neurônios, camadas, funções de ativação e backpropagation.',
    icon: 'Network',
    summary: `
      <h3 class="text-xl font-bold mb-2">Redes Neurais Artificiais</h3>
      <p class="mb-4">Inspiradas no cérebro humano, as redes neurais são compostas por neurônios artificiais que processam informações através de conexões ponderadas (pesos).</p>
      
      <h4 class="text-lg font-semibold mb-2">Estrutura Básica (Feedforward)</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Camada de Entrada:</strong> Recebe os dados brutos (ex: pixels).</li>
        <li><strong>Camadas Ocultas:</strong> Realizam cálculos e extração de características. Multiplicam entradas pelos pesos, somam o bias e aplicam não-linearidade.</li>
        <li><strong>Camada de Saída:</strong> Entrega a previsão final (ex: probabilidades de classes).</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">Componentes Chave</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Pesos (W):</strong> Força da conexão entre neurônios. É o que a rede "aprende".</li>
        <li><strong>Bias (b):</strong> Permite deslocar a função de ativação, ajustando melhor aos dados.</li>
        <li><strong>Função de Ativação:</strong> Introduz não-linearidade (ex: ReLU, Sigmoide, Softmax). Sem isso, a rede seria apenas uma regressão linear gigante.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">Treinamento</h4>
      <p>Ocorre via <strong>Backpropagation</strong>. A rede faz uma previsão (Forward), calcula o erro (Função de Custo), e o erro volta pela rede (Backward) ajustando os pesos via <strong>Gradiente Descendente</strong> para minimizar o erro futuro.</p>
    `,
    flashcards: [
      { id: 'f1', front: 'Feedforward', back: 'Rede onde a informação flui em uma única direção (entrada -> saída) sem ciclos ou loops.' },
      { id: 'f2', front: 'Função de Ativação ReLU', back: 'Retorna 0 se x < 0, e x se x > 0. Computacionalmente eficiente e evita desaparecimento do gradiente.' },
      { id: 'f3', front: 'Backpropagation', back: 'Algoritmo que calcula o gradiente do erro para ajustar os pesos da rede, propagando o erro da saída para a entrada.' },
      { id: 'f4', front: 'Epoch (Época)', back: 'Uma passagem completa de todo o conjunto de dados de treinamento pela rede neural (ida e volta).' },
      { id: 'f5', front: 'Bias', back: 'Parâmetro que permite deslocar a curva de ativação, garantindo que o neurônio dispare mesmo com entradas nulas.' },
      { id: 'f6', front: 'Neurônio Artificial', back: 'Unidade de cálculo que realiza uma soma ponderada das entradas e aplica uma função de ativação.' },
      { id: 'f7', front: 'Gradiente Descendente', back: 'Algoritmo de otimização usado para encontrar os valores de pesos que minimizam a função de custo/erro.' },
      { id: 'f8', front: 'Softmax', back: 'Função de ativação usada na camada de saída para classificação, convertendo valores em probabilidades.' },
      { id: 'f9', front: 'Overfitting', back: 'Quando a rede decora os dados de treino e não generaliza bem para dados novos.' },
      { id: 'f10', front: 'Pesos (Weights)', back: 'Coeficientes que multiplicam a entrada, representando a força da conexão sináptica.' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Para que serve a função Softmax na camada de saída?',
        options: [
          'Para zerar valores negativos.',
          'Para classificação multiclasse, transformando saídas em probabilidades que somam 1.',
          'Para criar convoluções.',
          'Para diminuir o tamanho da rede.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A Softmax normaliza as saídas para representar uma distribuição de probabilidade sobre as classes.'
      },
      {
        id: 'q2',
        question: 'O que acontece se não usarmos função de ativação não-linear?',
        options: [
          'A rede explode.',
          'A rede se torna equivalente a uma única camada linear, incapaz de aprender padrões complexos.',
          'O treinamento fica mais rápido e melhor.',
          'Nada muda.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Sem não-linearidade, empilhar camadas é matematicamente igual a ter uma só matriz de pesos.'
      },
      {
        id: 'q3',
        question: 'O que é o "Gradiente Descendente"?',
        options: [
          'Um tipo de neurônio.',
          'Um algoritmo de otimização usado para minimizar a função de custo ajustando os pesos.',
          'Um problema onde a rede para de aprender.',
          'A descida de dados da nuvem.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Ele guia os pesos na direção oposta ao gradiente do erro para encontrar o mínimo global ou local.'
      },
      {
        id: 'q4',
        question: 'Qual o papel dos "Pesos" (Weights) em uma rede neural?',
        options: [
          'Determinar a importância/força da conexão entre dois neurônios.',
          'Adicionar um valor constante à soma.',
          'Definir o número de camadas.',
          'Armazenar os dados de entrada.'
        ],
        correctAnswerIdx: 0,
        explanation: 'Os pesos são os parâmetros aprendidos que multiplicam a entrada para transformar os dados.'
      },
      {
        id: 'q5',
        question: 'O que é Overfitting?',
        options: [
          'Quando a rede é muito lenta.',
          'Quando a rede "decora" os dados de treino e não generaliza bem para dados novos.',
          'Quando a rede não aprende nada.',
          'Quando usamos muitos dados.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Overfitting ocorre quando o modelo captura ruídos do treino em vez do padrão geral.'
      },
      {
        id: 'q6',
        question: 'Qual a função do Bias (b)?',
        options: [
          'Multiplicar a entrada.',
          'Deslocar a função de ativação, permitindo que o modelo se ajuste melhor aos dados (como o intercepto b em ax+b).',
          'Apagar neurônios mortos.',
          'Aumentar a velocidade de treino.'
        ],
        correctAnswerIdx: 1,
        explanation: 'O bias garante que o neurônio possa disparar mesmo se todas as entradas forem zero ou baixas.'
      },
      {
        id: 'q7',
        question: 'O que a função Sigmoide faz?',
        options: [
          'Transforma valores para o intervalo [0, 1].',
          'Transforma valores para o intervalo [-1, 1].',
          'Zera valores negativos.',
          'Retorna sempre 1.'
        ],
        correctAnswerIdx: 0,
        explanation: 'A sigmoide tem formato de "S" e é usada historicamente para probabilidades binárias.'
      },
      {
        id: 'q8',
        question: 'O que é a Camada Oculta (Hidden Layer)?',
        options: [
          'Uma camada que o usuário não pode ver no código.',
          'Qualquer camada entre a camada de entrada e a camada de saída.',
          'Uma camada criptografada.',
          'A camada onde os dados são apagados.'
        ],
        correctAnswerIdx: 1,
        explanation: 'É onde a extração de características e transformações não-lineares acontecem.'
      },
      {
        id: 'q9',
        question: 'O que é Função de Custo (Loss Function)?',
        options: [
          'O preço do servidor na nuvem.',
          'Uma métrica que quantifica o quão errada está a previsão da rede comparada ao valor real.',
          'O tempo gasto no treinamento.',
          'A função que liga o computador.'
        ],
        correctAnswerIdx: 1,
        explanation: 'O objetivo do treinamento é minimizar essa função (ex: Erro Quadrático Médio).'
      },
      {
        id: 'q10',
        question: 'Qual o problema do "Desaparecimento do Gradiente" (Vanishing Gradient)?',
        options: [
          'O gradiente fica transparente.',
          'Os gradientes tornam-se tão pequenos nas camadas iniciais que a rede para de aprender.',
          'Os gradientes ficam muito grandes e explodem.',
          'O gradiente some do código.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Comum em redes profundas usando Sigmoide/Tanh, onde a derivada é < 1 e tende a zero nas multiplicações sucessivas.'
      },
      {
        id: 'q11',
        question: 'Quantos neurônios deve ter a camada de entrada?',
        options: [
          'Sempre 10.',
          'Depende do número de características (features) dos dados de entrada.',
          'Aleatório.',
          'Igual à camada de saída.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Cada neurônio de entrada representa um atributo do dado (ex: pixels de uma imagem).'
      },
      {
        id: 'q12',
        question: 'O que é ReLU (Rectified Linear Unit)?',
        options: [
          'Uma unidade de processamento gráfico.',
          'Uma função de ativação que retorna max(0, x).',
          'Um tipo de regularização.',
          'Um algoritmo de clusterização.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A ReLU é computacionalmente eficiente e ajuda a evitar o desaparecimento do gradiente.'
      },
      {
        id: 'q13',
        question: 'O que é o "Forward Pass" (Propagação para frente)?',
        options: [
          'Passar os dados da entrada até a saída para gerar uma predição.',
          'Voltar com o erro para ajustar pesos.',
          'Pular camadas.',
          'Salvar o modelo.'
        ],
        correctAnswerIdx: 0,
        explanation: 'É o cálculo da rede camada por camada para obter o resultado final.'
      },
      {
        id: 'q14',
        question: 'Em classificação binária, qual função de ativação é comum na saída?',
        options: [
          'Softmax',
          'Sigmoide',
          'Linear',
          'ReLU'
        ],
        correctAnswerIdx: 1,
        explanation: 'A sigmoide retorna um valor entre 0 e 1, ideal para probabilidade de "sim/não".'
      },
      {
        id: 'q15',
        question: 'Qual a analogia biológica aproximada de um "peso" alto entre dois neurônios?',
        options: [
          'Um neurônio morto.',
          'Uma sinapse forte, facilitando a transmissão do sinal.',
          'Um neurônio muito grande.',
          'Uma infecção viral.'
        ],
        correctAnswerIdx: 1,
        explanation: 'O aprendizado no cérebro envolve o fortalecimento ou enfraquecimento das sinapses, simulado pelos pesos.'
      }
    ]
  },
  {
    id: 'mod_cnn',
    title: 'Redes Convolucionais (CNN)',
    type: ModuleType.CNN,
    description: 'Arquiteturas para visão computacional, filtros e pooling.',
    icon: 'Image',
    summary: `
      <h3 class="text-xl font-bold mb-2">Redes Neurais Convolucionais (CNN)</h3>
      <p class="mb-4">Projetadas especificamente para dados em grade (como imagens), inspiradas no córtex visual biológico. Elas preservam a relação espacial entre pixels.</p>
      
      <h4 class="text-lg font-semibold mb-2">Camada de Convolução</h4>
      <p class="mb-2">O núcleo da CNN. Aplica <strong>filtros (kernels)</strong> que deslizam sobre a imagem realizando cálculos matemáticos para detectar características (bordas, texturas, formas).</p>
      <p class="mb-2">Conceitos importantes:</p>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li><strong>Kernel/Filtro:</strong> Pequena matriz de pesos aprendidos (ex: 3x3).</li>
        <li><strong>Feature Map:</strong> O resultado da convolução, mostrando onde a característica foi detectada.</li>
        <li><strong>Stride:</strong> O passo do deslizamento do filtro (ex: pular de 2 em 2 pixels).</li>
        <li><strong>Padding:</strong> Adicionar bordas de zeros para manter o tamanho da imagem.</li>
      </ul>

      <h4 class="text-lg font-semibold mb-2">Camada de Pooling</h4>
      <p class="mb-4">Reduz a dimensionalidade (tamanho) da imagem para diminuir custo computacional e evitar overfitting. O mais comum é o <strong>Max Pooling</strong>, que pega apenas o maior valor de uma região (ex: 2x2), preservando a característica mais forte.</p>

      <h4 class="text-lg font-semibold mb-2">Arquitetura Geral</h4>
      <p>Geralmente segue o padrão: Convolução -> ReLU -> Pooling (repete N vezes) -> Flatten (achatamento) -> Camadas Densas (Classificação).</p>
    `,
    flashcards: [
      { id: 'f1', front: 'Convolução', back: 'Processo de passar um filtro (kernel) sobre a imagem para extrair características (features) locais.' },
      { id: 'f2', front: 'Pooling', back: 'Redução da dimensionalidade espacial do mapa de características. Resume a informação.' },
      { id: 'f3', front: 'Stride', back: 'O tamanho do passo que o filtro dá ao deslizar sobre a imagem. Stride maior reduz a saída.' },
      { id: 'f4', front: 'Padding', back: 'Adição de bordas (geralmente zeros) na imagem para controlar o tamanho da saída e processar bordas.' },
      { id: 'f5', front: 'Kernel/Filtro', back: 'Matriz pequena de pesos que desliza sobre a entrada para detectar padrões como bordas e texturas.' },
      { id: 'f6', front: 'Feature Map', back: 'O resultado da aplicação de um filtro sobre a imagem; um mapa de ativação de características.' },
      { id: 'f7', front: 'Max Pooling', back: 'Tipo de pooling que seleciona apenas o valor máximo dentro da janela deslizante.' },
      { id: 'f8', front: 'Flatten (Achatamento)', back: 'Camada que transforma a matriz 3D/2D final em um vetor 1D para entrar na rede densa.' },
      { id: 'f9', front: 'Invariância à Translação', back: 'Capacidade da CNN de reconhecer um objeto independente de onde ele está na imagem.' },
      { id: 'f10', front: 'Campo Receptivo', back: 'A região da imagem de entrada que influencia um determinado neurônio na saída.' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Qual o principal objetivo da camada de Pooling?',
        options: [
          'Aumentar a resolução da imagem.',
          'Colorir a imagem.',
          'Reduzir a dimensionalidade espacial e custo computacional, mantendo características importantes.',
          'Multiplicar os pixels por zero.'
        ],
        correctAnswerIdx: 2,
        explanation: 'O pooling resume a informação, tornando a rede mais leve e tolerante a pequenas translações.'
      },
      {
        id: 'q2',
        question: 'Se temos uma imagem 32x32 e aplicamos um filtro 5x5 com stride 1 e sem padding, qual o tamanho da saída?',
        options: [
          '32x32',
          '28x28',
          '5x5',
          '14x14'
        ],
        correctAnswerIdx: 1,
        explanation: 'Fórmula: (N - F) / Stride + 1. (32 - 5) / 1 + 1 = 28.'
      },
      {
        id: 'q3',
        question: 'O que um "Kernel" ou "Filtro" faz em uma CNN?',
        options: [
          'Filtra vírus no computador.',
          'Detecta características específicas (como bordas verticais ou curvas) ao deslizar pela imagem.',
          'Reduz o brilho da imagem.',
          'Conecta todos os neurônios.'
        ],
        correctAnswerIdx: 1,
        explanation: 'O kernel é uma matriz de pesos aprendidos que "acende" quando encontra o padrão que procura.'
      },
      {
        id: 'q4',
        question: 'O que significa "Stride" de 2?',
        options: [
          'O filtro pula de 2 em 2 pixels.',
          'O filtro é tamanho 2x2.',
          'A imagem é duplicada.',
          'Existem 2 filtros.'
        ],
        correctAnswerIdx: 0,
        explanation: 'Stride é o passo do deslizamento. Um stride maior reduz a dimensão espacial da saída.'
      },
      {
        id: 'q5',
        question: 'Por que CNNs são melhores que Redes Densas (MLP) para imagens?',
        options: [
          'Porque são mais complexas.',
          'Elas preservam a estrutura espacial dos pixels e compartilham pesos (parâmetros), sendo mais eficientes.',
          'Elas não usam matemática.',
          'Elas só funcionam com imagens preto e branco.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Uma MLP achataria a imagem perdendo a noção de vizinhança entre pixels e teria parâmetros demais.'
      },
      {
        id: 'q6',
        question: 'O que é Max Pooling?',
        options: [
          'Pegar a média dos valores em uma janela.',
          'Pegar o valor mínimo.',
          'Pegar o valor máximo em uma janela (ex: 2x2), destacando a presença mais forte da característica.',
          'Somar todos os valores.'
        ],
        correctAnswerIdx: 2,
        explanation: 'Max Pooling preserva a característica mais saliente detectada naquela região.'
      },
      {
        id: 'q7',
        question: 'O que é "Padding"?',
        options: [
          'Adicionar bordas (geralmente zeros) à imagem de entrada.',
          'Cortar a imagem.',
          'Comprimir a imagem.',
          'Adicionar ruído.'
        ],
        correctAnswerIdx: 0,
        explanation: 'Padding é usado para manter a dimensão espacial da imagem após a convolução ou processar bordas.'
      },
      {
        id: 'q8',
        question: 'Na imagem do ratinho apresentada na aula, o que acontece quando o filtro da "curva das costas" passa pela orelha?',
        options: [
          'Dá um valor alto (match).',
          'Dá um valor baixo ou zero (mismatch), pois os formatos não coincidem.',
          'A rede trava.',
          'O ratinho foge.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A convolução é uma medida de similaridade. Se a forma no filtro não bate com a imagem, o resultado é baixo.'
      },
      {
        id: 'q9',
        question: 'O que é a camada "Flatten" (Achatamento)?',
        options: [
          'Uma ferramenta de edição de imagem.',
          'Transforma a matriz 3D/2D de características em um vetor 1D para entrar na camada densa final.',
          'Remove as cores.',
          'Diminui o tamanho do arquivo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Serve de ponte entre a parte convolucional (extração de features) e a parte densa (classificação).'
      },
      {
        id: 'q10',
        question: 'Quantos canais de cor tem uma imagem RGB padrão?',
        options: [
          '1 (Cinza)',
          '2 (Preto e Branco)',
          '3 (Vermelho, Verde, Azul)',
          '4 (CMYK)'
        ],
        correctAnswerIdx: 2,
        explanation: 'A entrada de uma CNN colorida geralmente tem profundidade 3 (Height x Width x 3).'
      },
      {
        id: 'q11',
        question: 'O que é um "Feature Map" ou Mapa de Ativação?',
        options: [
          'Um mapa geográfico.',
          'A saída de uma camada de convolução, representando onde cada filtro foi ativado na imagem.',
          'O gabarito da prova.',
          'A lista de pesos.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Se temos 32 filtros, teremos 32 feature maps, cada um mostrando onde uma feature específica apareceu.'
      },
      {
        id: 'q12',
        question: 'As CNNs são inspiradas em qual sistema biológico?',
        options: [
          'Sistema digestivo.',
          'Córtex visual dos animais (campos receptivos).',
          'Sistema auditivo.',
          'Sistema motor.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Estudos de Hubel e Wiesel sobre como gatos enxergam bordas e formas inspiraram a arquitetura.'
      },
      {
        id: 'q13',
        question: 'O que é Batch Normalization em CNNs?',
        options: [
          'Normalizar os dados em lotes para estabilizar e acelerar o treinamento.',
          'Processar imagens em preto e branco.',
          'Deletar dados ruins.',
          'Uma função de ativação.'
        ],
        correctAnswerIdx: 0,
        explanation: 'Ajuda a reduzir a covariância interna e permite taxas de aprendizado maiores.'
      },
      {
        id: 'q14',
        question: 'Numa CNN, as primeiras camadas geralmente detectam o quê?',
        options: [
          'Objetos completos (carros, pessoas).',
          'Características simples de baixo nível (bordas, linhas, cores).',
          'O significado da imagem.',
          'Ruído apenas.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A hierarquia visual começa com traços simples e compõe formas complexas nas camadas profundas.'
      },
      {
        id: 'q15',
        question: 'O que significa que a convolução é "invariante a translação"?',
        options: [
          'Que ela não funciona se mover a imagem.',
          'Que ela pode detectar o mesmo objeto independente de onde ele esteja na imagem.',
          'Que ela traduz textos.',
          'Que ela só detecta objetos no centro.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Como o mesmo filtro varre toda a imagem, um gato no canto ou no centro ativará o mesmo filtro.'
      }
    ]
  },
  {
    id: 'mod_rnn',
    title: 'Redes Recorrentes (RNN)',
    type: ModuleType.RNN,
    description: 'Processamento de sequências, séries temporais e memória.',
    icon: 'Activity',
    summary: `
      <h3 class="text-xl font-bold mb-2">Redes Neurais Recorrentes (RNN)</h3>
      <p class="mb-4">Diferente das redes Feedforward, as RNNs possuem "memória". Elas são desenhadas para lidar com <strong>dados sequenciais</strong> onde a ordem importa (texto, áudio, séries temporais).</p>
      
      <h4 class="text-lg font-semibold mb-2">Funcionamento Básico</h4>
      <p class="mb-2">A rede processa um elemento da sequência por vez. A saída de um passo anterior (t-1) é realimentada como entrada no passo atual (t), juntamente com a nova entrada.</p>
      <p class="mb-4">Isso cria um <strong>Estado Oculto (Hidden State)</strong> que atua como memória de curto prazo, carregando o contexto da sequência.</p>

      <h4 class="text-lg font-semibold mb-2">O Problema do Gradiente</h4>
      <p class="mb-4">Em sequências muito longas, RNNs simples sofrem com o <strong>Desaparecimento do Gradiente</strong> (esquecem o início da frase). Para resolver isso, surgiram arquiteturas mais complexas como <strong>LSTM</strong> (Long Short-Term Memory) e GRU.</p>

      <h4 class="text-lg font-semibold mb-2">Aplicações</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Tradução Automática (Seq2Seq).</li>
        <li>Previsão do tempo ou ações (Séries Temporais).</li>
        <li>Reconhecimento de fala.</li>
        <li>Geração de texto (ex: prever a próxima palavra).</li>
      </ul>
    `,
    flashcards: [
      { id: 'f1', front: 'RNN (Recurrent Neural Network)', back: 'Rede projetada para dados sequenciais, onde a saída anterior influencia a entrada atual (feedback).' },
      { id: 'f2', front: 'Estado Oculto (Hidden State)', back: 'Mecanismo de memória da RNN que carrega informações dos passos de tempo anteriores.' },
      { id: 'f3', front: 'Aplicações de RNN', back: 'Tradução automática, reconhecimento de fala, previsão de séries temporais (bolsa, clima).' },
      { id: 'f4', front: 'Desafio das RNNs', back: 'Desaparecimento do gradiente em sequências muito longas (dificuldade de lembrar o início).' },
      { id: 'f5', front: 'Loop de Feedback', back: 'A conexão que permite que a saída de um passo seja reintroduzida como entrada no próximo passo.' },
      { id: 'f6', front: 'LSTM', back: 'Long Short-Term Memory. Arquitetura de RNN com "portões" para controlar o fluxo de memória e evitar perda de gradiente.' },
      { id: 'f7', front: 'BPTT', back: 'Backpropagation Through Time. O algoritmo de treino que desenrola a rede no tempo para calcular gradientes.' },
      { id: 'f8', front: 'One-to-Many', back: 'Arquitetura onde uma entrada gera uma sequência de saídas (ex: legenda de imagem).' },
      { id: 'f9', front: 'Many-to-One', back: 'Arquitetura onde uma sequência de entradas gera uma única saída (ex: análise de sentimento).' },
      { id: 'f10', front: 'Seq2Seq', back: 'Modelo (Sequence to Sequence) usado para tradução, onde uma RNN codifica a entrada e outra decodifica a saída.' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Por que a RNN é diferente da Feedforward?',
        options: [
          'Ela usa apenas imagens.',
          'Ela possui conexões de feedback (loops) permitindo persistência de informação temporal.',
          'Ela não usa pesos.',
          'Ela é mais rápida.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A recorrência permite que a rede tenha "memória" de eventos passados na sequência, essencial para tempo.'
      },
      {
        id: 'q2',
        question: 'O que significa o índice "t" em Ht numa RNN?',
        options: [
          'Temperatura',
          'Tempo (ou passo na sequência atual).',
          'Total',
          'Treinamento'
        ],
        correctAnswerIdx: 1,
        explanation: 'Representa o instante atual. Ht depende da entrada Xt e do estado anterior Ht-1.'
      },
      {
        id: 'q3',
        question: 'Qual o principal problema ao treinar RNNs em sequências longas?',
        options: [
          'Falta de memória RAM.',
          'Desaparecimento do Gradiente (Vanishing Gradient), esquecendo o início da frase.',
          'Overfitting imediato.',
          'A rede fica muito rápida.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Como o gradiente é multiplicado muitas vezes (pelo tempo), ele tende a zero, dificultando aprender dependências longas.'
      },
      {
        id: 'q4',
        question: 'O que é o "Estado Oculto" (Hidden State) em uma RNN?',
        options: [
          'Um arquivo secreto.',
          'A memória da rede, contendo um resumo do que foi processado até agora.',
          'A saída final para o usuário.',
          'A camada de entrada.'
        ],
        correctAnswerIdx: 1,
        explanation: 'O estado oculto carrega o contexto temporal através dos passos da sequência.'
      },
      {
        id: 'q5',
        question: 'Para qual tipo de dado a RNN é mais indicada?',
        options: [
          'Tabelas estáticas independentes.',
          'Imagens estáticas isoladas.',
          'Dados sequenciais (texto, áudio, vídeo, séries temporais).',
          'Classificação de cores.'
        ],
        correctAnswerIdx: 2,
        explanation: 'Sempre que a ordem dos dados importa (ex: a ordem das palavras muda o sentido), RNNs são úteis.'
      },
      {
        id: 'q6',
        question: 'Como funciona o treinamento de uma RNN?',
        options: [
          'Backpropagation through Time (BPTT).',
          'Apenas Forward.',
          'K-Means.',
          'Não é treinável.'
        ],
        correctAnswerIdx: 0,
        explanation: 'É uma variação do backpropagation onde o erro é propagado de volta através dos passos de tempo (desenrolando a rede).'
      },
      {
        id: 'q7',
        question: 'Em uma arquitetura "One-to-Many" (Um para Muitos), qual seria um exemplo de aplicação?',
        options: [
          'Classificação de sentimento (Frase -> Nota).',
          'Legenda de imagem (Imagem -> Frase descrevendo).',
          'Tradução (Frase -> Frase).',
          'Previsão do tempo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Uma entrada (imagem) gera uma sequência de saídas (palavras da legenda).'
      },
      {
        id: 'q8',
        question: 'Qual a desvantagem computacional das RNNs comparadas a Feedforward/CNNs?',
        options: [
          'São muito simples.',
          'Dificuldade de paralelização, pois o passo t depende do cálculo do passo t-1.',
          'Usam muita GPU.',
          'Não funcionam em Python.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A natureza sequencial impede o processamento paralelo massivo de toda a sequência de uma vez (ao contrário de Transformers).'
      },
      {
        id: 'q9',
        question: 'Se quisermos prever a próxima palavra de uma frase, que tipo de arquitetura usamos?',
        options: [
          'Many-to-One ou Many-to-Many.',
          'One-to-One.',
          'CNN pura.',
          'K-Means.'
        ],
        correctAnswerIdx: 0,
        explanation: 'Usamos as palavras anteriores (Muitos) para prever a próxima (Um) ou a sequência seguinte.'
      },
      {
        id: 'q10',
        question: 'O que acontece se invertermos a ordem de entrada em uma RNN?',
        options: [
          'O resultado é exatamente o mesmo.',
          'O resultado muda, pois a RNN é sensível à ordem sequencial.',
          'A rede quebra.',
          'Vira uma CNN.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Diferente de uma soma simples, a ordem altera como o estado oculto é atualizado passo a passo.'
      },
      {
        id: 'q11',
        question: 'Qual a função da "memória" na analogia da aula (Ex: Ler um livro)?',
        options: [
          'Esquecer o capítulo anterior.',
          'Entender a frase atual com base no contexto do que foi lido antes.',
          'Decorar o número da página.',
          'Ignorar os personagens.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Você não começa a pensar do zero a cada palavra; você carrega o contexto do parágrafo.'
      },
      {
        id: 'q12',
        question: 'O que é LSTM (Long Short-Term Memory)?',
        options: [
          'Uma memória RAM rápida.',
          'Uma arquitetura de RNN avançada projetada para resolver o problema do desaparecimento do gradiente.',
          'Um tipo de monitor.',
          'Uma biblioteca de Java.'
        ],
        correctAnswerIdx: 1,
        explanation: 'LSTM usa "portões" (gates) para controlar o fluxo de informação, permitindo aprender dependências longas.'
      },
      {
        id: 'q13',
        question: 'Em uma RNN, os pesos são compartilhados através do tempo?',
        options: [
          'Não, cada passo de tempo tem pesos diferentes.',
          'Sim, a mesma matriz de pesos é usada em cada passo da sequência.',
          'Às vezes.',
          'Depende da GPU.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Isso é fundamental. A rede aplica a mesma regra de transição (pesos) em cada instante.'
      },
      {
        id: 'q14',
        question: 'O que seria uma aplicação "Many-to-One"?',
        options: [
          'Tradução de texto.',
          'Classificação de Sentimento (Analisar uma frase inteira e dar uma nota positiva/negativa).',
          'Gerar música.',
          'Reconhecimento de voz contínuo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Muitas entradas (palavras da frase) resultam em uma única saída (classificação).'
      },
      {
        id: 'q15',
        question: 'O que é o "bias" na fórmula Ht = activation(W * Xt + U * Ht-1 + b)?',
        options: [
          'O erro da rede.',
          'Um termo constante adicionado para ajustar a ativação.',
          'A entrada anterior.',
          'A saída final.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Assim como em redes feedforward, o bias permite deslocar a função de ativação.'
      }
    ]
  },
  {
    id: 'mod_advanced',
    title: 'Avançado: Kohonen, ART & RBF',
    type: ModuleType.ADVANCED,
    description: 'Mapas auto-organizáveis, Teoria da Ressonância Adaptativa e Funções de Base Radial.',
    icon: 'Cpu',
    summary: `
      <h3 class="text-xl font-bold mb-2">Redes de Kohonen (SOM)</h3>
      <p class="mb-2">Redes de aprendizado <strong>não supervisionado</strong> usadas para agrupamento (clusterização) e visualização. Elas mapeiam dados complexos em um grid 2D preservando a <strong>topologia</strong> (dados similares ficam vizinhos).</p>
      <p class="mb-4">Usa aprendizado competitivo: o neurônio com pesos mais parecidos com a entrada é o "vencedor" e é ajustado.</p>

      <h3 class="text-xl font-bold mb-2">Adaptive Resonance Theory (ART)</h3>
      <p class="mb-2">Resolve o <strong>dilema estabilidade-plasticidade</strong>: Como aprender novidades (plasticidade) sem esquecer o que já sabe (estabilidade)?</p>
      <p class="mb-4">Usa um <strong>parâmetro de vigilância</strong>. Se a entrada for parecida o suficiente com uma categoria existente (ressonância), ela é refinada. Se for muito diferente, uma nova categoria é criada.</p>

      <h3 class="text-xl font-bold mb-2">Radial Basis Function (RBF)</h3>
      <p class="mb-2">Redes feedforward com uma camada oculta que usa funções radiais (como Gaussianas). A ativação depende da <strong>distância</strong> entre a entrada e um "centro".</p>
      <p>Treinamento Híbrido: Camada oculta é ajustada por métodos não supervisionados (K-means para achar centros), e a saída é ajustada linearmente (supervisionado).</p>
    `,
    flashcards: [
      { id: 'f1', front: 'Mapas de Kohonen (SOM)', back: 'Rede não supervisionada que reduz dimensionalidade preservando a topologia (vizinhança dos dados).' },
      { id: 'f2', front: 'Aprendizado Competitivo', back: 'Em Kohonen, neurônios competem para ser ativados. Apenas o vencedor (e vizinhos) têm pesos ajustados.' },
      { id: 'f3', front: 'ART (Adaptive Resonance Theory)', back: 'Resolve o dilema estabilidade-plasticidade. Aprende novos padrões sem esquecer os antigos.' },
      { id: 'f4', front: 'Parâmetro de Vigilância (ART)', back: 'Define quão parecido um padrão deve ser para ser aceito em uma categoria existente.' },
      { id: 'f5', front: 'RBF (Radial Basis Function)', back: 'Rede feedforward que usa funções radiais (como gaussianas) na camada oculta. Ótima para aproximação de funções.' },
      { id: 'f6', front: 'Dilema Estabilidade-Plasticidade', back: 'O desafio de um sistema aprender novas informações (plasticidade) sem apagar memórias antigas (estabilidade).' },
      { id: 'f7', front: 'Neurônio Vencedor (BMU)', back: 'Best Matching Unit. O neurônio cujo vetor de pesos é o mais próximo da entrada atual.' },
      { id: 'f8', front: 'Topologia', back: 'Propriedade do SOM onde dados vizinhos no espaço original são mapeados para neurônios vizinhos no grid.' },
      { id: 'f9', front: 'Ressonância', back: 'No ART, estado onde a entrada e a expectativa da categoria coincidem o suficiente para permitir aprendizado.' },
      { id: 'f10', front: 'Treinamento Híbrido (RBF)', back: 'Combinação de não-supervisionado (ajustar centros na camada oculta) e supervisionado (pesos da saída).' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'Qual a principal vantagem do ART (Adaptive Resonance Theory)?',
        options: [
          'É mais colorido.',
          'Usa menos memória RAM.',
          'Resolve o dilema estabilidade-plasticidade: aprende novos padrões sem esquecer catastroficamente os antigos.',
          'Usa convoluções 3D.'
        ],
        correctAnswerIdx: 2,
        explanation: 'Redes comuns tendem a esquecer o treino antigo ao aprender algo novo. ART cria novas categorias dinamicamente.'
      },
      {
        id: 'q2',
        question: 'Em redes de Kohonen (SOM), o que acontece com o "neurônio vencedor"?',
        options: [
          'Ele é apagado.',
          'Ele e seus vizinhos têm os pesos ajustados para ficarem mais parecidos com a entrada.',
          'Ele se torna uma camada de saída.',
          'Nada acontece.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Isso cria clusters topológicos onde dados similares ativam neurônios fisicamente próximos no mapa.'
      },
      {
        id: 'q3',
        question: 'O que é o "Parâmetro de Vigilância" no ART?',
        options: [
          'Um antivírus.',
          'Um limiar que define quão similar uma entrada deve ser de um padrão existente para ser aceita na mesma categoria.',
          'O tempo de treino.',
          'A taxa de aprendizado.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Se a similaridade for menor que a vigilância, o ART cria uma nova categoria (plasticidade).'
      },
      {
        id: 'q4',
        question: 'Qual o tipo de aprendizado das Redes de Kohonen?',
        options: [
          'Supervisionado (com labels).',
          'Não Supervisionado (Auto-organizável).',
          'Por Reforço.',
          'Manual.'
        ],
        correctAnswerIdx: 1,
        explanation: 'SOMs agrupam dados baseados apenas na estrutura intrínseca (distância), sem saber as classes a priori.'
      },
      {
        id: 'q5',
        question: 'Como a RBF (Radial Basis Function) processa a entrada na camada oculta?',
        options: [
          'Multiplica por pesos simples.',
          'Calcula a distância da entrada até um centro (centróide) usando uma função radial (ex: Gaussiana).',
          'Usa convolução.',
          'Ignora a entrada.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A ativação depende da proximidade da entrada em relação ao centro do neurônio RBF.'
      },
      {
        id: 'q6',
        question: 'Na analogia do "Geraldo na pizzaria" para ART, o que acontece se o Geraldo não passar no teste de vigilância?',
        options: [
          'Ele é contratado mesmo assim.',
          'Ele é rejeitado e a rede procura outra categoria (ou cria uma nova empresa para ele).',
          'A pizzaria fecha.',
          'Ele vira o dono.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Se o padrão não "ressoa" o suficiente com o esperado, o sistema inibe aquela categoria e tenta outra.'
      },
      {
        id: 'q7',
        question: 'Qual a topologia típica de um Mapa de Kohonen?',
        options: [
          'Uma linha reta infinita.',
          'Um grid bidimensional (matriz) onde a vizinhança é preservada.',
          'Uma árvore binária.',
          'Não tem forma.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Isso permite visualizar dados de alta dimensão em um mapa 2D compreensível.'
      },
      {
        id: 'q8',
        question: 'O que significa dizer que o SOM preserva a "Topologia"?',
        options: [
          'Que ele desenha mapas.',
          'Que dados similares na entrada são mapeados para neurônios vizinhos/próximos no grid de saída.',
          'Que ele usa GPS.',
          'Que ele é 3D.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Dados próximos no espaço original ficam próximos no mapa final.'
      },
      {
        id: 'q9',
        question: 'Qual a diferença principal do treinamento da camada de saída da RBF?',
        options: [
          'É não supervisionado.',
          'Geralmente é linear e supervisionado (como mínimos quadrados ou gradiente), após fixar os centros.',
          'É impossível treinar.',
          'Usa Backpropagation no tempo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'RBF costuma ter treino híbrido: não-supervisionado para achar centros (K-means) e supervisionado para os pesos de saída.'
      },
      {
        id: 'q10',
        question: 'Para que servem as redes RBF?',
        options: [
          'Apenas para texto.',
          'Aproximação de funções, classificação e previsão de séries temporais.',
          'Apenas para jogos.',
          'Para armazenar arquivos.'
        ],
        correctAnswerIdx: 1,
        explanation: 'São excelentes aproximadores universais de funções.'
      },
      {
        id: 'q11',
        question: 'No contexto do ART, o que é "Ressonância"?',
        options: [
          'O som da rede.',
          'O estado onde a entrada confirma a expectativa da categoria escolhida (match suficientemente alto).',
          'Quando a rede vibra.',
          'Um erro de cálculo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A rede entra em ressonância quando estabiliza o aprendizado daquele padrão naquela categoria.'
      },
      {
        id: 'q12',
        question: 'Qual a desvantagem de usar K-Means em vez de Kohonen?',
        options: [
          'K-Means é muito lento.',
          'K-Means não preserva relações topológicas/vizinhança visual como o Kohonen.',
          'K-Means não faz clusterização.',
          'Não há desvantagem.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Kohonen oferece uma visualização espacial rica das relações entre clusters, K-Means apenas agrupa.'
      },
      {
        id: 'q13',
        question: 'O que é "Aprendizado Híbrido" em RBF?',
        options: [
          'Usar gasolina e eletricidade.',
          'Combinar uma etapa não supervisionada (ajustar centros/larguras) e uma supervisionada (ajustar pesos lineares).',
          'Treinar dia sim, dia não.',
          'Usar CPU e GPU.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A camada oculta se auto-organiza, a camada de saída aprende o erro.'
      },
      {
        id: 'q14',
        question: 'Se o parâmetro de vigilância do ART for muito alto (próximo de 1), o que acontece?',
        options: [
          'A rede aceita qualquer coisa na mesma categoria (generaliza muito).',
          'A rede rejeita pequenas diferenças e cria muitas categorias específicas (memória detalhada).',
          'A rede para de funcionar.',
          'A rede apaga tudo.'
        ],
        correctAnswerIdx: 1,
        explanation: 'Alta vigilância = alta exigência de similaridade = categorias muito específicas (grão fino).'
      },
      {
        id: 'q15',
        question: 'Qual entrada é típica para redes ART-1?',
        options: [
          'Vídeo em 4K.',
          'Vetores binários (0s e 1s).',
          'Áudio analógico.',
          'Texto livre.'
        ],
        correctAnswerIdx: 1,
        explanation: 'A versão original ART-1 foi desenhada para padrões binários. ART-2 lida com valores contínuos.'
      }
    ]
  }
];
