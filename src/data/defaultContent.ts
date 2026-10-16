import { ProgramBookContent } from '../types/content';

export const defaultProgramContent: ProgramBookContent = {
  meta: {
    title: '흐르는 도시',
    subtitle: '콜렉티브 노루점핑 아카이브 퍼포먼스 2',
    dates: '서울 2026년 10월 26일(월) - 30일(금) <br> 부산 2026년 11월 11일(수) - 13일(금)',
    venue: '서울대학교 14동 인문소극장 <br> 부산 민주공원 민주항쟁기념관',
    runningTime: '약 120분',
    ticketPrice: '무료 관람',

    credits: [
      { role: '총괄PD / 퍼포머', names: '안건우' },
      { role: '드라마투르기 / 리서치', names: '장민영' },
      { role: '공간연출', names: '정수미' },
      { role: '기술감독', names: '김재성' },
      { role: '건축리서치', names: '이수민' },
      { role: '퍼포머', names: '현림' },
      { role: '촬영', names: '성승정' },
      { role: '하우스매니저(부산)', names: '이지영(민주공원)' },
      { role: '자료협조', names: '박지원(민주주의기록관)' },
      { role: '직물', names: '일광상회(부산진시장)' },
      { role: '의상', names: '또또패션(부산진시장)' },
      { role: '사무협력', names: '채명훈(박종철기념사업회)' },
      { role: '제작지원', names: '사단법인 박종철기념사업회' },
      { role: '대관지원', names: '민주공원' }
    ],
    collectiveIntro: "연주대를 지붕 삼아 학문에 크지도 작지도 않은 뜻을 두고 폐관수련을 이어오던 대학원생 셋이 재미로움을 좇아 일단 무언가를 해보자 하고 의기투합하여 자하동으로 흘러드는 냇가에 모여 쿠키를 나누며 의를 맺었습니다. 학문과 예술의 경계를 노루가 뛰놀듯 넘나들고자 하였으니, 관악에 전해 내려오는 전설 같은 고사들 중에서 출전의 근거로 삼아 이들의 모임을 일컬어 '노루점핑'이라 이름지었습니다."
  },
  schedule: {
    heading: '공연 진행',
    note: '일정에 따라 진행하는 퍼포먼스가 다르니 꼭 아래 정보를 확인하세요.',
    firstGroupLabel: '서울(26일 30일*) 부산(11일 12일 13일*)',
    secondGroupLabel: '서울(27일 28일 29일)',
    items: [
      {
        title: '퍼포먼스 1 — 얼음땡',
        duration: '약 20분',
        description: '몸과 공간이 서로의 낯섦을 인지하고 감각하는 과정'
      },
      {
        title: '퍼포먼스 2 — 뜨거운 겨울을 나기 위해 필요한 실타래의 길이를 구하는 방법',
        duration: '약 100분',
        description: '자신의 목도리를 건넨 박종철 열사를 위한 목도리 뜨기'
      },
      {
        title: '흐르는 캠퍼스를 걷다',
        duration: '자유시간',
        description: '나만의 경로로 걷는 민주화의 길'
      }
    ]
  },
  producerNote: {
    authorTitle: '',
    authorName: '안건우',
    heading: '지금은 사라진 존재들과 같은 공간을 감각하며',
    paragraphs: [
      '모든 공간에는 과거의 존재들이 남긴 자취가 있습니다. 자취들이 오랜 시간 쌓이고 쌓여 공간의 역사를 만듭니다. 역사를 기록하고 열람하는 방식은 다양합니다. 무릇 역사란 문자와 같은 매체를 거쳐 기록되기 마련이지만, 차마 문자로 기록되지 못하는 역사도 존재하기 마련입니다.',
      '예컨대 몸짓이 그러합니다. 문자로 기록된 몸짓이란 은밀한 시와 같아서 온전한 몸짓의 모습을 드러내지 못하지만, 오히려 그 불명료한 습성 속에 기록 너머 잠재된 맥락들이 위치합니다. 우리는 리서치 과정에서 수집한 다양한 문자 기록에서 확인되는 몸짓의 역사를 추적하였습니다. 몸짓은, 현실에서도 그러하듯이 문자 기록 속에서도 다종다양하였습니다. 울부짖는 몸짓, 규탄하는 몸짓, 침묵하는 몸짓, 도망하는 몸짓, 던지는 몸짓, 때리는 몸짓, 속죄하는 몸짓, 참회하는 몸짓, 따지는 몸짓, 추락하는 몸짓, 수많은 몸짓들. 역사를 구성하는 수다한 몸짓들 속에서 우리는 몸이라는 재료와 몸짓이라는 수행을 통하여 역사를 감각하고 체험해 보기로 결심하였습니다.',
      '그리고, 그 모든 몸짓들이 넘실대던 도시가 있습니다. 민주주의를 향한 열망의 몸짓들이 새로운 도시의 장경을 형성하는 과정에서, 시민들은 스스로 거리로 나와 몸짓을 수행하며 입 막히고 눈 가려진 시대의 복판에서 정의를 외쳤습니다. 도시는 기꺼이 몸짓이 펼쳐지는 무대가 되었습니다.',
      '같은 도시이지만 오늘날의 도시는 그때와 모습을 거의 잃었습니다. 거리로 나선 청년들은 이제 중년의 몸이 되었습니다. 그러나 당시의 외침과 장력이 도시의 일부를 형성하고 있음을 압니다. 과거의 존재들이 시간의 물결을 타고 점차 흘러가는 지금, 청년의 몸으로 과거의 맥락을 감각하려는 시도는 어떤 의미를 줄 수 있을까요? 그 접촉점에서 우리는 무엇을 만날 수 있을까요?',
      '퍼포먼스는 하나의 완결된 서사를 제시하지 않습니다. 그리고 퍼포머와 관객 모두가 퍼포먼스의 형성 과정에 개입하여 몸짓을 수행할 수 있습니다. 퍼포먼스의 끝에 무엇이 있을지는 아무도 모르며, 그로 인하여 가질 수 있는 경험도 저마다 다를 것입니다. 복수의 퍼포먼스가 창발하는 사이, 여러분이 감각할 경험은 어떤 모습일까요? '
    ],
    closing: '',
    translations: {
      fr: {
        authorTitle: '',
        authorName: 'Ahn Geon-woo',
        heading: 'Ressentir le même espace aux côtés de présences désormais disparues',
        paragraphs: [
          'Nous croyons que le théâtre doit toujours demeurer un espace de résistance face à la vitesse du monde contemporain. Dans une société où tout s’efface et se remplace à un rythme effréné, nous avançons sans même avoir le temps de nous demander ce que nous perdons en chemin. Cette création est née du désir d’accueillir sur la scène, telle une humble écuelle, les voix de ceux qui habitaient des lieux sans nom, effacés des cartes par cette gigantesque accélération.',
          'Porter une œuvre sur scène ne se résume pas à mettre en images un texte imprimé. C’est tisser une mémoire commune où résonnent la respiration de l’acteur, la texture des décors, l’obscurité des lumières et la densité des silences partagés avec le public. Pour cette production, nous avons délibérément écarté tout artifice ou ornement superflu afin de nous consacrer à la sincérité du verbe et à la résonance essentielle du texte.',
          'Nous espérons que le public présent ce soir pourra, le temps de cette représentation, déposer le bruit du quotidien. Puisse cet instant suspendu dans la salle entrouvrir avec douceur la porte d’un souvenir précieux enfoui au plus profond de chacun d’entre vous.'
        ],
        closing: ''
      },
      en: {
        authorTitle: '',
        authorName: 'Geonwoo Ahn',
        heading: 'Sensing the Shared Space Alongside What Has Now Vanished',
        paragraphs: [
          'We believe that the theater must always remain a sanctuary that resists the relentless speed of contemporary life. In a modern society where everything is swiftly erased and replaced, we rush forward without even the breathing room to ask what we might be leaving behind. This performance began with the desire to gather onto the stage, like an intimate vessel, the voices of nameless places and forgotten souls swept away from the map by immense speed.',
          'Bringing a theatrical performance to the stage is never merely about visualizing a printed script. It is an act of constructing collective memory, breathing together with the audience through the performer’s breath, the texture of the stage, the deep shadows, and shared silence. For this production, we consciously stripped away ornate decor and excessive spectacle to focus squarely on the honest language of the performer and the organic resonance of the text.',
          'We hope that all of you visiting the theater today may momentarily set aside the clamor of everyday life. May this quiet hour shared in the dark auditorium gently knock on the door of memories long kept within your hearts, serving as a time of warm and genuine hospitality.'
        ],
        closing: ''
      }
    }
  },
  dramaturgNote: {
    authorTitle: '',
    authorName: '장민영',
    heading: '지금은 사라진 존재들과 같은 공간을 마주하며',
    subheading: '',
    paragraphs: [
      '도시란 단순한 건축적 구조물의 물리적 집합체가 아닙니다. 그것은 그곳을 살아간 수많은 주체들의 궤적과 상처, 소망이 겹겹이 퇴적된 거대한 시간의 지층입니다. <흐르는 도시>는 공간의 상실이라는 현대 도시의 보편적 비극을 다루면서도, 단순한 과거 지향적 향수에 함몰되지 않는 엄정한 시선을 견지합니다. 철거와 소멸의 현장은 상실의 장소인 동시에, 억압되었던 진실이 언어화되는 역설적인 해방의 시공간으로 작동합니다.',
      '이 작품에서 펼쳐지는 시간과 아카이브의 궤적은 세대와 기억의 전승 작업입니다. 구술과 사료는 파편화되어 있지만, 기록자의 합리적 이성이 미처 포착하지 못하는 삶의 진실된 결을 고스란히 품고 있습니다. 텍스트는 사라짐과 기억이 충돌하고 교차하는 지점에서 발생하는 정서적 마찰열을 세밀하게 포착하며, 관객으로 하여금 "기억한다는 행위는 누구를 위한 것인가"라는 윤리적 물음 앞에 서게 만듭니다.',
      '무대 위에서 펼쳐지는 시간의 미학은 물질이 부재할 때 비로소 드러나는 영속적 가치들을 조명합니다. 극장에 흐르는 긴 침묵과 양쪽으로 정돈된 단단한 언어들은 관객 각자의 내면에 축적된 개인적 기억과 공명할 것입니다. 우리는 이 극을 통해 허물어진 벽돌 틈 사이에서 피어난 연약한 풀잎처럼, 소멸 속에서도 기어이 살아남는 연대의 가능성을 목도하게 됩니다.'
    ],
    closing: '',
    translations: {
      fr: {
        authorTitle: '',
        authorName: 'Jang Min-young',
        heading: 'Face au même espace aux côtés de présences désormais disparues',
        subheading: '',
        paragraphs: [
          'Une ville n’est pas un simple ensemble d’édifices et d’infrastructures matérielles. C’est une strate temporelle colossale où se déposent les trajectoires, les blessures et les désirs des innombrables âmes qui l’ont arpentée. Tout en abordant la tragédie contemporaine de la perte des lieux, cette réflexion maintient un regard rigoureux qui refuse la complaisance nostalgique. L’espace de disparition devient ainsi le lieu paradoxal où s’énonce la vérité enfouie.',
          'Le déploiement des archives et des temporalités dans cette œuvre relève d’une transmission vivante de la mémoire. Bien que les témoignages oraux et les fragments historiques paraissent discontinus, ils recèlent la texture intime de l’existence que la raison pure ne saurait saisir. Le texte capte la chaleur émotionnelle née de la friction entre effacement et remémoration, plaçant le spectateur devant une interrogation éthique : pour qui nous souvenons-nous ?',
          'L’esthétique scénique éclaire ce qui persiste lorsque la matière vient à manquer. Les silences habités et la rigueur de la parole résonnent avec la mémoire intime de chaque spectateur. À l’instar d’un brin d’herbe fragile poussant entre les fissures des décombres, nous assistons à la possibilité inébranlable d’une solidarité qui survit à la disparition.'
        ],
        closing: ''
      },
      en: {
        authorTitle: '',
        authorName: 'Minyoung Jang',
        heading: 'Facing the Shared Space Alongside Vanished Presences',
        subheading: '',
        paragraphs: [
          'A city is never merely a physical accumulation of architectural structures. It is a vast stratum of time where the trajectories, wounds, and longings of countless lives have settled in layers. While addressing the universal tragedy of urban dispossession, this work maintains a disciplined gaze that refuses to retreat into mere nostalgia. Sites on the brink of demolition become paradoxically liberating arenas where repressed truths find utterance.',
          'The trajectories of time and archival material in this work perform the essential transmission of generational memory. Though oral testimonies and documents are fragmented, they preserve the visceral grain of lived life that rational calculation fails to capture. The text illuminates the emotional friction where erasure and remembrance collide, prompting audience members to confront an urgent ethical question: for whom do we remember?',
          'The poetics of time unfolding on stage illuminate enduring values that surface precisely in the absence of tangible matter. The profound silences and deliberate prose will resonate with the personal memories stored within each spectator. Like fragile blades of grass emerging between crumbling bricks, we witness the resilient possibility of solidarity surviving through and beyond disappearance.'
        ],
        closing: ''
      }
    }
  },
  notices: {
    heading: '공연 안내',
    lead: '',
    categories: [
      {
        categoryTitle: '',
        items: [
          '모든 공연은 진행 중 자유로운 입퇴장이 가능합니다.',
          '다른 관객의 관람을 방해하는 소란 행위는 금지됩니다.',
          '퍼포머의 퍼포먼스를 고의적으로 지연 또는 방해하는 행위는 엄격히 제한됩니다.',
          '객석은 자유석으로 운영됩니다. 퍼포먼스 진행에 방해되지 않는 선에서 자유로운 자세로 관람하실 수 있습니다.',
          '퍼포먼스1과 퍼포먼스2 사이에는 약 10분 간 퍼포머의 공연 해설이 진행됩니다.'
        ]
      },
      {
        categoryTitle: '',
        items: [
          '공연 장소에서 이동하실 때에는 안내요원의 안내에 따라 안전사고에 유의해 주시기 바랍니다.',
          '휴대전화 등 전자기기는 공연 시작 전 무음 모드로 전환해 주시기 바랍니다.',
          '공연 중 사전 협의 없는 장기간의 동영상 녹화나 음성 녹음 및 퍼포머나 관객들의 신체 부위를 촬영하는 행위는 엄격히 금지됩니다.',
          '공연 중 경험을 아카이빙하기 위한 단발적인 촬영 행위는 가능합니다. 단, 상연 중의 모습을 촬영한 모든 사진은 영리 목적으로 활용하거나 또는 공중에 전시할 수 없습니다.',
          '공연 장소 내외부에서는 정치적 홍보 및 종교적 포교 활동이 불가하며, 적발될 경우 강제 퇴장 조치합니다.',
          '소란과 폭력 등 다른 관객의 관람과 공연의 진행에 방해가 되는 행위를 할 경우 상응하는 조치가 이루어질 수 있습니다.'
        ]
      },
      {
        categoryTitle: '',
        items: [
          '본 공연은 누구나 관람할 수 있습니다. 영유아 관객은 관람 시 동반 보호자의 주의가 요구됩니다.',
          '휠체어 전용 좌석 및 이동 보조가 필요하신 관객께서는 입장 동선과 관련하여 아래 연락처로 꼭 미리 연락 주시기 바랍니다.',
          '장애인 보조견의 동반 관람은 법령에 의하여 허용됩니다.',
          '공연 관람과 관련하여 모든 궁금증은 안내요원에게 편하게 질문해 주세요.'
        ]
      }
    ],
    emergencyGuide: [
      '공연 장소 내의 비상 대피 경로 및 비상구의 위치를 확인해 주시기 바랍니다.',
      '비상 상황 발생 시 객석에 머물며 안전요원의 침착한 안내에 따라 질서 있게 대피하여 주시기 바랍니다.',
      '공연 장소내 안전수칙과 안내요원의 안내를 이행하지 아니하여 발생한 모든 사고의 책임은 본인에게 귀속됩니다.'
    ],
    inquiry: {
      phone: '010-5477-3380',
      email: 'collectivenoroojumping@gmail.com',
      operatingHours: '※이 사이트는 인간이 입력한 프롬프트를 기반으로 Google ai studio가 생성한 코드로 구축되었으며, 수록된 모든 글은 인간의 창작물이다.'
    }
  }
};
