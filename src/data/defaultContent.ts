import { ProgramBookContent } from '../types/content';

export const defaultProgramContent: ProgramBookContent = {
  meta: {
    title: '흐르는 도시 <br> Les villes coulantes',
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
      { role: '자료협조', names: '박지원(부산민주항쟁기념사업회)' },
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
    firstGroupTime: '개막시간: 19시(서울) 15시(부산)',
    secondGroupLabel: '서울(27일 28일 29일)',
    secondGroupTime: '개막시간: 13시부터(예약 바로가기)',
    noticeBox: '퍼포먼스 2는 모두가 함께 만드는 순서입니다. 퍼포먼스의 원활한 진행을 위해 관객 여러분께서는 뜨개실을 지참해 주세요. 뜨개실은 대바늘용으로, 어떤 색이든 상관 없이 길면 길수록 좋습니다.',
    items: [
      {
        title: '퍼포먼스 1 — 얼음땡',
        duration: '약 20분',
        description: '몸과 공간이 서로의 낯섦을 인지하고 감각하는 과정'
      },
      {
        title: '퍼포먼스 2 — 뜨거운 겨울을 나기 위해 필요한 실타래의 길이를 구하는 방법',
        duration: '약 100분',
        description: '자신의 목도리를 나눈 박종철 열사를 위하여'
      },
      {
        title: '흐르는 캠퍼스를 걷다',
        duration: '자유시간',
        description: '나만의 경로로 걷는 민주화의 길'
      }
    ]
  },
  directions: {
    heading: '오시는 길',
    venues: [
      {
        title: '서울대학교 인문소극장 오시는 길',
        subway: '2호선 낙성대역 하차 → 4번출구로 나와 주유소 끼고 좌회전 → 장블랑제리 앞 관악02-2 버스 탑승 → 행정관 정류장 하차 <br> 2호선 서울대입구역 하차 → 3번출구로 나와 5511 버스 탑승 → 관악사삼거리 정류장 하차 → 버스가 온 방향으로 거슬러 내려가 농구장 지나 주차타워 진출입로 사이 왼쪽 도토리계단 이용 <br> 신림선 관악산역 하차 → 1번출구로 나와 5516 버스 탑승 → 자연대행정관 정류장 또는 관악사삼거리 정류장 하차 → 자연대행정관 정류장 하차시 행정관-인문대 거쳐 6동 뒤편 14동 도보 이동',
        bus: '2호선 서울대입구역 3번출구로 나와 직진하여 커피빈 앞 행정관 셔틀 정류장에서 셔틀버스 이용 → 행정관에서 인문대 거쳐 6동 뒤편 14동 도보 이동',
        car: '내비게이션에 "나들문 G12" 경로 입력 후 이동하여 주차타워에 주차(캠퍼스 내 주차료 발생)',
        taxi: '관악사삼거리 하차 후 농구장과 주차타워 진출입로 사이 왼쪽 도토리계단 이용'
      },
      {
        title: '민주공원 민주항쟁기념관 오시는 길',
        subway: '1호선 동대신역 또는 부산역 이용 후 버스 또는 택시로 환승',
        bus: '중앙도서관 정류장: 중구1 <br> 중앙공원.민주공원 정류장: 48, 43, 70, 508',
        car: '민주항쟁기념관 주차장 이용(주차공간이 협소하여 주차가 불가할 수 있습니다)',
        taxi: '민주공원 하차'
      }
    ]
  },
  producerNote: {
    authorTitle: '',
    authorName: '안건우',
    heading: '지금은 사라진 존재들과 같은 공간을 감각하며',
    paragraphs: [
      '모든 공간에는 과거의 존재들이 남긴 자취가 있습니다. 자취들이 오랜 시간 쌓이고 쌓여 공간의 역사를 만듭니다. 역사를 기록하고 열람하는 방식은 다양합니다. 차마 문자로 기록되지 못하는 역사도 존재하기 마련입니다.',
      '예컨대 몸짓이 그러합니다. 문자로 기록된 몸짓이란 은밀한 시와 같아서 온전한 몸짓의 모습을 드러내지 못하지만, 오히려 그 불명료한 습성 속에 기록 너머 잠재된 맥락들이 위치합니다. 우리는 박종철 열사와 1987년의 민주화운동에 관한 리서치 과정을 통해, 다양한 문자 기록에서 확인되는 몸짓의 역사를 추적하였습니다. 몸짓은, 현실에서도 그러하듯이 문자 기록 속에서도 다종다양하였습니다. 울부짖는 몸짓, 규탄하는 몸짓, 침묵하는 몸짓, 도망하는 몸짓, 던지는 몸짓, 때리는 몸짓, 속죄하는 몸짓, 참회하는 몸짓, 따지는 몸짓, 추락하는 몸짓, 수많은 몸짓들. 역사를 구성하는 수다한 몸짓들 속에서 우리는 몸이라는 재료와 몸짓이라는 수행을 통하여 역사를 감각하고 체험해 보기로 결심하였습니다.',
      '그리고, 그 모든 몸짓들이 넘실대던 도시가 있습니다. 민주주의를 향한 열망의 몸짓들이 새로운 도시의 장경을 형성하는 과정에서, 시민들은 스스로 거리로 나와 몸짓을 수행하며 입 막히고 눈 가려진 시대의 복판에서 정의를 외쳤습니다. 도시는 기꺼이 몸짓이 펼쳐지는 무대가 되었습니다.',
      '같은 도시이지만 오늘날의 도시는 그때와는 다른 모습으로 다가옵니다. 거리로 나선 청년들은 이제 중년의 몸이 되었습니다. 세상을 떠난 몸도 있을 것입니다. 그러나 당시의 외침과 긴장이 여전히 도시의 일부를 형성하고 있음을 압니다. 과거의 존재들이 시간의 물결을 타고 점차 흘러가는 지금, 청년의 몸으로 과거의 맥락을 감각하려는 시도는 어떤 의미를 줄 수 있을까요? 그 접촉점에서 우리는 무엇을 만날 수 있을까요?',
      '당시의 도시처럼 같은 공간에 존재하는 모든 퍼포머의 몸들이 함께 만들어 나가는 이 퍼포먼스의 끝에 무엇이 있을지는 아무도 모르며, 그로 인하여 각자의 몸이 체험하게 될 경험 역시 저마다 다를 것입니다. 복수의 퍼포먼스가 창발하는 사이, 우리의 몸은 과거의 맥락과 어떻게 접촉할 수 있을지 기대해 봅니다.'
    ],
    closing: '',
    translations: {
      fr: {
        authorTitle: '',
        authorName: 'Ahn Geon-woo',
        heading: 'Ressentir le même espace aux côtés de présences désormais disparues',
        paragraphs: [
          'Dans chaque espace, il existe des traces laissées par les êtres du passé. Ces traces s’accumulent pendant longtemps et finissent par former l’histoire d’un lieu. Il existe plusieurs manières d’enregistrer et de consulter cette histoire. Il y a aussi, forcément, des histoires qui ne peuvent pas être mises en mots.',
          'Le geste en est un exemple. Un geste enregistré par l’écriture ressemble à un poème secret : il ne peut pas montrer entièrement la forme réelle du geste. Mais c’est justement dans ce caractère imprécis que se trouvent des contextes cachés, restés au-delà de ce qui a été écrit. À travers notre recherche sur Park Jong-cheol et sur le mouvement de démocratisation de 1987, nous avons essayé de suivre l’histoire des gestes qui apparaissent dans différents documents écrits. Les gestes étaient très divers dans les archives, comme ils le sont dans la réalité : gestes de cri, de dénonciation, de silence, de fuite, gestes de lancer, de frapper, de demander pardon, de se repentir, de protester, de tomber, et beaucoup d’autres encore. Parmi tous ces gestes qui composent l’histoire, nous avons décidé d’essayer de sentir et d’expérimenter l’histoire à travers le corps comme matière et le geste comme action.',
          'Et il existe une ville dans laquelle tous ces gestes ont autrefois circulé et débordé. Au moment où les gestes exprimant le désir de démocratie formaient un nouveau paysage urbain, les citoyens sont eux-mêmes sortis dans les rues. Ils ont fait de leurs corps des gestes et ont crié pour la justice au milieu d’une époque où les bouches étaient fermées et les yeux couverts. La ville est alors devenue, volontairement, une scène où les gestes pouvaient se déployer.',
          'C’est la même ville, mais aujourd’hui elle nous apparaît autrement. Les jeunes qui étaient descendus dans la rue ont maintenant des corps d’âge moyen. Certains de ces corps ont sans doute déjà disparu. Pourtant, nous savons que les cris et les tensions de cette époque font encore partie de la ville. Maintenant que les êtres du passé s’éloignent peu à peu avec le mouvement du temps, quel sens peut avoir une tentative de sentir les contextes du passé avec un corps jeune ? Qu’est-ce que nous pouvons rencontrer à ce point de contact ?',
          'Comme dans la ville de cette époque, personne ne sait ce qui se trouvera à la fin de cette performance, créée ensemble par les corps de tous les performeurs présents dans un même espace. Pour cette raison, l’expérience vécue par chaque corps sera également différente. Pendant que plusieurs performances émergent en même temps, nous attendons de voir de quelle manière nos corps pourront entrer en contact avec les contextes du passé.'
        ],
        closing: ''
      },
      en: {
        authorTitle: '',
        authorName: 'Geonwoo Ahn',
        heading: 'Sensing the Shared Space Alongside What Has Now Vanished',
        paragraphs: [
          'In every space, there are traces left by people from the past. These traces build up over a long period of time and eventually form the history of a place. There are many different ways to record and look into history. There are also histories that, inevitably, could not be recorded in written words.',
          'Gestures are one example. A gesture recorded in writing is like a secret poem. It cannot fully reveal the complete form of the gesture, but rather, within this unclear quality, there are hidden contexts that remain beyond the written record. Through our research on Park Jong-cheol and the democratization movement of 1987, we traced the history of gestures that could be found in various written documents. The gestures were diverse in written records, just as they were in reality. Gestures of crying out, gestures of condemnation, gestures of silence, gestures of running away, gestures of throwing, gestures of hitting, gestures of atonement, gestures of repentance, gestures of questioning, gestures of falling, and countless other gestures. Among the many gestures that make up history, we decided to try to sense and experience history through the body as material and gesture as performance.',
          'And there was a city in which all of these gestures moved and overflowed. As gestures of desire for democracy formed a new landscape of the city, citizens themselves came out into the streets and performed their gestures, crying out for justice in the middle of an era in which mouths were blocked and eyes were covered. The city willingly became a stage where gestures could unfold.',
          'It is the same city, but the city of today comes to us in a different form from that time. The young people who went out into the streets have now become middle-aged bodies. Some bodies may have already passed away. Still, we know that the cries and tensions of that period continue to form part of the city. Now, as people from the past gradually move away with the flow of time, what kind of meaning can there be in trying to sense the context of the past through a young body? What can we encounter at that point of contact?',
          'As in the city of that time, no one knows what will be found at the end of this performance, which is created together by the bodies of all performers existing in the same space. Because of this, the experience that each body goes through will also be different. As multiple performances emerge at the same time, we look forward to seeing how our bodies may come into contact with the contexts of the past.'
        ],
        closing: ''
      }
    }
  },
  dramaturgNote: {
    authorTitle: '',
    authorName: '장민영',
    heading: '드라마투르기의 말',
    subheading: '',
    paragraphs: [
      '움직인다.',
      '우리네 시간대에 살아서 실존하는 모든 것들은 종류 불문하고 움직인다. 하나의 좌표에 고정되어 영원불변한 것은 없기 때문이다. 이 글을 써내려가는 순간에도 손가락은 각기 다르게 움직이고, 시야 가장자리에 걸린 보조 모니터에서는 매 순간 다른 선율이 흐르며, 창밖의 풍경은 사방으로 흔들린다.',
      '이러한 움직임은 방향을 가진다. 때로는 관찰자가 어디에 있느냐에 따라 그 방향에 대한 해석이 달라지기도 한다. 그러나 의식하든 그렇지 않든, 움직이는 신체와 정신은 변화하며 오늘에 이르렀다. 2026년 오늘, 화면을 스크롤하고 지하철 손잡이를 잡으며 익숙하게 걸어가는 청년들의 일상적인 몸짓은 1987년의 어느 날 체포되어 끌려가던 청년의 거친 몸짓과 겹쳐지면서 단면 슬라이싱(Cross-sectional Slicing)의 아이러니한 연속을 이룬다. 1987년 1월 14일, 박종철 열사가 나고 자란 부산 바다의 유동적인 물과 남영동 취조실의 고인 물은 4차원 위에서 하나의 단면으로 포개졌다. 그의 몸짓은 멈추었고, 같은 움직임으로 걸어 나오지 못했으며, 더 이상의 시간은 존재하지 않게 되었다. ',
      '일기일회(一期一会),',
      '"지금 이 순간은 다시 돌아오지 않는다"라는 다도(茶道)의 이 유명한 말은 어쩌면 우리가 생각하는 시간과 공간, 그리고 신체에 대한 근원적인 고찰을 요구하는 것일지도 모른다. 콜렉티브 노루점핑이 선보이는 이번 작업은 대한민국의 수도(首都)인 서울과 박종철 열사의 고향인 부산이라는 두 공간을 ‘몸짓’을 통해 엮어 낸다. 몸짓이라는 불분명한 움직임은 그 공백을 관객이자 관찰자인 이들에게 제시하여 해석의 틈을 열어 준다. 퍼포먼스는 한 번의 호흡처럼 순간에 기반하여 발생했다가 과거로 지나갈 것이다. 그러나 이 움직임을 목격하는 여러분 자신의 신체 역시 현재라는 좌표 위에 함께 서 있다. 퍼포머의 호흡과 관객의 들숨이 만나는 이 순간, 그 기억은 신체 속에서 다시 재생되며 질문을 던질 것이다.',
      '2026년의 우리는, 그리고 우리 사회는 어디로 움직이고 있는가? 1987년으로부터 단절된 것처럼 존재하는 현재는 사실 인간의 끊임없는 몸짓과 한순간도 끊임없이 지속되어 온 시간이다. 따라서 역사를 기억한다는 것, 추모한다는 것은 단순한 머릿속의 연산이 아니라 지금 이 자리에서 숨 쉬고 움직이는 신체를 통한 기억의 형성을 의미한다. 이곳에서의 여러 퍼포먼스는 멈추어 섰던 1987년을 지금, 여기의 살아있는 신체로 받아낸다. 정지된 시간을 다시 감각할 때 우리의 신체는 비로소 다음 좌표를 향해 움직이기 시작할 것이다.'
    ],
    closing: '',
    translations: {
      fr: {
        authorTitle: '',
        authorName: 'Jang Min-young',
        heading: 'Mots de Dramaturgue',
        subheading: '',
        paragraphs: [
          'Ça bouge.',
          'Toutes les choses qui existent réellement dans notre temps bougent, sans distinction de nature. Rien ne reste fixé pour toujours sur une seule coordonnée, sans aucun changement. Même au moment où j’écris ce texte, mes doigts bougent chacun d’une manière différente, une autre mélodie passe à chaque instant sur le moniteur secondaire au bord de mon champ de vision, et le paysage derrière la fenêtre tremble dans toutes les directions.',
          'Ces mouvements ont une direction. Parfois, l’interprétation de cette direction change selon l’endroit où se trouve l’observateur. Pourtant, que nous en soyons conscients ou non, le corps et l’esprit en mouvement ont changé et sont arrivés jusqu’à aujourd’hui. En 2026, les gestes ordinaires des jeunes qui font défiler un écran, tiennent la poignée du métro et marchent d’un pas familier se superposent aux gestes brusques d’un jeune homme arrêté et emmené un jour de 1987. Ils forment ainsi une continuité ironique de Cross-sectional Slicing. Le 14 janvier 1987, l’eau mouvante de la mer de Busan, où Park Jong-cheol est né et a grandi, et l’eau stagnante de la salle d’interrogatoire de Namyeong-dong se sont superposées, dans les quatre dimensions, comme une seule coupe. Ses gestes se sont arrêtés. Il n’a pas pu ressortir avec le même mouvement, et pour lui, il n’y a plus eu de temps après cela.',
          '일기일회(一期一会),',
          'Cette célèbre phrase de la cérémonie du thé, « ce moment ne reviendra jamais », demande peut-être une réflexion fondamentale sur le temps, l’espace et le corps tels que nous les pensons. Cette œuvre présentée par le collectif Noroojumping relie deux espaces, Seoul, capitale de la République de Corée, et Busan, ville natale de Park Jong-cheol, à travers le « geste ». Le geste, comme mouvement difficile à définir, présente cet espace vide à ceux qui sont à la fois spectateurs et observateurs, et ouvre ainsi une possibilité d’interprétation. La performance apparaîtra sur la base d’un instant, comme une seule respiration, puis elle passera dans le passé. Mais votre propre corps, qui témoigne de ce mouvement, se trouve lui aussi sur la coordonnée du présent. Au moment où le souffle du performeur rencontre l’inspiration du spectateur, cette mémoire sera rejouée dans le corps et posera une question.',
          'En 2026, vers où allons-nous, nous-mêmes et notre société ? Le présent qui semble séparé de 1987 est en réalité un temps qui n’a jamais cessé, accompagné sans interruption par les gestes humains. Ainsi, se souvenir de l’histoire et commémorer ne signifie pas seulement faire un calcul dans la tête, mais former une mémoire à travers le corps qui respire et bouge ici et maintenant. Les différentes performances présentées ici reçoivent aujourd’hui, par des corps vivants présents ici, l’année 1987 qui s’était arrêtée. Lorsque nous sentirons de nouveau ce temps immobile, nos corps pourront enfin commencer à se diriger vers la prochaine coordonnée.'
        ],
        closing: ''
      },
      en: {
        authorTitle: '',
        authorName: 'Minyoung Jang',
        heading: 'Words of Dramaturgue',
        subheading: '',
        paragraphs: [
          'It moves.',
          'Everything that exists and lives within our time moves, regardless of its kind. This is because nothing stays fixed forever at one coordinate without change. Even at the moment of writing this text, each finger moves in a different way, a different melody flows every moment from the secondary monitor at the edge of my vision, and the scenery outside the window shakes in many directions.',
          'These movements have directions. Sometimes, the interpretation of that direction changes depending on where the observer stands. But whether we are conscious of it or not, the moving body and mind have changed and arrived at today. In 2026, the ordinary gestures of young people who scroll screens, hold subway handles, and walk along familiar streets overlap with the rough gestures of a young man who was arrested and taken away on one day in 1987. Together, they form an ironic continuity of Cross-sectional Slicing. On January 14, 1987, the flowing water of the sea in Busan, where Park Jong-cheol was born and raised, and the still water in the interrogation room of Namyeong-dong were layered into one section in four-dimensional space. His gestures stopped. He could not walk out again with the same movement, and no more time existed for him.',
          '일기일회(一期一会),',
          'This famous expression from the tea ceremony, “this moment will never return,” may perhaps ask us to think fundamentally about time, space, and the body. This work presented by Collective NorooJumping connects two spaces, Seoul, the capital of the Republic of Korea, and Busan, the hometown of Park Jong-cheol, through “gesture.” Gesture, as an unclear kind of movement, presents its empty space to those who are both audience and observer, and opens a gap for interpretation. The performance will happen based on a moment, like a single breath, and then pass into the past. But your own body, which witnesses this movement, is also standing on the coordinate of the present. At the moment when the breath of the performer meets the audience’s inhalation, that memory will be played again inside the body and will raise a question.',
          'In 2026, where are we moving, and where is our society moving? The present, which seems to exist as if it were separated from 1987, is in fact a time that has continued without a single break together with the continuous gestures of human beings. Therefore, remembering history and commemorating it do not mean only a calculation inside the mind. They mean forming memory through the body that is breathing and moving here and now. The different performances in this place receive the year 1987, which once stopped, through living bodies of the present, here and now. When we sense that stopped time again, our bodies may finally begin to move toward the next coordinate.'
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
      phone: '',
      email: 'collectivenoroojumping@gmail.com',
      operatingHours: '이 페이지는 인간이 입력한 프롬프트를 기반으로 Google ai studio가 생성한 코드로 구축되었으며, 수록된 모든 글은 AI를 사용하지 않은 인간의 창작물이다.'
    }
  }
};
