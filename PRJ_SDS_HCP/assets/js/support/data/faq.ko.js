if (!faqResources) {
  var faqResources;
  faqResources = {};
}
faqResources.ko = {
	"OFFERINGS": [{
			"category": "OFFERINGS",
			"section": "Virtual Server",
			"title": "Virtual Server란 무엇입니까?",
			"contents": "Virtual Server는 CPU/메모리 등 서버에서 제공하는 인프라 자원을 전용으로 구축할 필요 없이, 필요한 시점에 자유롭게 할당 받아 사용할 수 있는 컴퓨팅 서비스 입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Virtual Server",
			"title": "Virtual Server의 사용료는 어떤 기준으로 과금 됩니까?",
			"contents": "VM은 CPU/Memory 크기, 약정 여부 (무약정/1년/3년), OS 종류 (오픈소스, RHEL, Windows)에 따라 요금이 변경 되며, 해당 요금 기준으로 생성한 VM의 사용 시간에 따라 과금됩니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "VM Auto-Scaling",
			"title": "VM Auto-Scaling이란 무엇입니까?",
			"contents": "사용자가 정의한 조건에 따라, VM을 자동으로 추가 생성 또는 삭제하는 컴퓨팅 서비스 입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "VM Auto-Scaling",
			"title": "어떤 기준으로 자원 규모가 조정됩니까?",
			"contents": "VM Auto-Scaling의 실행 조건은 크게 2가지 기준으로 나눌수 있습니다. 첫번째는 자원 사용량 입니다. 사용자는 CPU/메모리 등의 임계치/평균값 등을 지정하여, 자원 생성/삭제의 기준을 정의할 수 있습니다. 두번째는 일정입니다. 사용자는 희망하는 스케쥴을 사전 등록하여, 해당 시점에 자원의 자동 생성/삭제를 설정할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Bare Metal Server",
			"title": "Bare Metal Server란 무엇입니까?",
			"contents": "가상화 기술을 사용하지 않고, 물리적으로 분리된 컴퓨팅 자원을 단독으로 할당 받아 사용할 수 있는 컴퓨팅 서비스 입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Bare Metal Server",
			"title": "Virtual Server와 다른 Bare Metal Server의 제약 조건은 무엇입니까?",
			"contents": "단독 자원을 제공하기 때문에 일부 제공 되지 않는 기능들이 있으며, 지속적으로 개선을 위해 검토 중 입니다. \n- Security Group 설정, Custom Image 생성, Init script 입력 등 기능 미제공\n- 한개의 프로젝트 내 Bare Metal Server는 최대 20개까지 생성 가능"
		},
		{
			"category": "OFFERINGS",
			"section": "Block Storage",
			"title": "Multi-Attach 기능은 무엇인가요 ? ",
			"contents": "HA(High Availability)를 위한 클러스터 환경 구성시에, 하나의 볼륨을 여러 서버들이 접근하기 위해 구현해 놓은 기술입니다. (현재 BM 한정)"
		},
		{
			"category": "OFFERINGS",
			"section": "Block Storage",
			"title": "블록스토리지 볼륨 생성시, 최대 할당량은 얼마인가요 ?",
			"contents": "기본적으로 서버의 OS영역은 100GB를 제공하며, 이후 외장 블록 스토리지를 통해 160TB 까지 온라인 중에 할당 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Block Storage",
			"title": "과금은 어떻게 되나요?",
			"contents": "사용자가 신청한 용량을 기준으로 일단위로 계산되어 과금됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "NAS 이미지 스냅샷이란 무엇인가요 ? ",
			"contents": "NAS 볼륨에 스냅샷을 생성하고 스냅샷 용량 및 생성주기를 관리하는 기능을 제공하며, 생성된 스냅샷을 이용하여 볼륨단위로 신속하게 복구가 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "SDS File Storage 강점은 무엇인가요 ? ",
			"contents": "AWS, OCI 등 Global CSP가 제공하는 File Storage 대비 10~20배 이상의 성능(IOPS, throughput)보장 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "파일스토리지 볼륨 생성시, 최대 할당량은 얼마인가요?",
			"contents": "파일스토리지의 볼륨을 생성 시, 최대 100TB 까지 할당할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "File Storage",
			"title": "과금은 어떻게 되나요?",
			"contents": "사용자가 신청한 용량을 기준으로 일단위로 계산되어 과금됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "퍼블릭 접근 권한은 어떤 방식으로 제공하나요?",
			"contents": "보안보완 사항이 있어서 URL 접근 불가함, 10월 버전 반영"
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "버킷의 버전관리 기능을 제공하나요?",
			"contents": "네. 버전관리 기능을 제공하여 동일 버킷 내에 여러 개의 객체 변형을 보유하며, 버킷에 저장된 모든 버전의 객체를 보존, 검색 및 복원 할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "암호화 기능을 제공하나요 ? ",
			"contents": "네. 기본적으로 버킷 암호화 기능을 SSE-S3(Server Side Encryption-S3)방식으로 제공하고 있으며, 버킷 단위로 암호화 하여 데이터를 안전하게 보관합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Object Storage",
			"title": "과금은 어떻게 되나요?",
			"contents": "버킷 내 사용량을 측정하여 일단위로 계산되어 과금됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "백업은 어떻게 수행하나요?",
			"contents": "백업은 스케쥴 기반의 생성만 제공합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "백업으로 제공하는 대상은 어떤게 있나요?",
			"contents": "VM 이미지 스냅샷, NAS 이미지 스냅샷, DB 백업(Online) 을 제공합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "보관주기가 만료되면 데이터는 어떻게 되나요 ? ",
			"contents": "백업보관주기는 2주, 4주를 제공하며 보관주기가 경과된 데이터는 자동 삭제 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "VM의 이미지 스냅샷을 이용한 복구는 어떻게 제공하나요?",
			"contents": "VM 이미지 스냅샷을 이용한 복구 시, 새로운 VM을 생성하여 해당 데이터(OS+DATA)를 복구합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Backup",
			"title": "과금은 어떻게 되나요?",
			"contents": "사용자가 생성한 VM의 이미지 스냅샷, DB 백업을 오브젝트 스토리지에 저장하며, 해당 장비에 저장된 백업량을 기준으로 과금합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DB Service",
			"title": "DB Service는 무엇인가요?",
			"contents": "DB Service는 웹 기반 콘솔을 통해 관계형, 비정형 및 데이터 분석 관련 DBMS에 대해 데이터베이스 생성과 설정을 자동화된 구성과 환경으로 제공합니다. 중요 데이터의 안정적인 관리를 위해 VM 환경에서 동작하며, VPC 기반으로 단일 인스턴스나 이중화 구성이 가능하고, 백업/복구, Parameter 관리, Audit , Minor Patch, 모니터링 등 데이터베이스의 생명주기 내 업무를 자동화 기능으로 제공합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DB Service",
			"title": "DB Service에서 제공되는 DBMS 종류는 무엇인가요? ",
			"contents": "□ 제공 DB\n - RDB : EPAS, PostgreSQL, MariaDB, MySQL, MS SQL, Tibero, Vertica\n - NoSQL DB : Redis"
		},
		{
			"category": "OFFERINGS",
			"section": "DB Service",
			"title": "DB Service에서 자동으로 수행하는 관리 작업에는 어떤 것이 있습니까?",
			"contents": "- Auto Provisioning : 다양한 스펙의 VM 기반으로 SDS 표준 버전 Database 자동 설치\n- HA구성 (RDB) : SW레벨의 디스크 동기 복제 기반  Active-Standby 구성\n- Cluster구성 (NoSQL) : DB 자체 Replica 구성으로 가용성 보장\n- Backup : DBMS의 자체 백업 기능을 활용하여 수행되어 Object Storage에 저장\n- Recovery : Object Storage에 저장된 백업파일 기준으로 시점 복구 가능\n- Patch : DB Minor Version에 대한 Patch 기능 제공\n- 사용자 Parameter 설정 : DB 성능 향상 및 보안과 관련된 Parameter 설정\n- Audit 설정 : DB Connection 및 DDL 수행에 대한 Log 저장\n- 모니터링 : VM 리소스(CPU, Memory) 및 DB 상태 모니터링"
		},
		{
			"category": "OFFERINGS",
			"section": "Kafka",
			"title": "Confluent Platform(Kafka)는 무엇인가요?",
			"contents": "Kafka 서비스는 Kubernetes Apps를 활용하여 Confluent Platform의 클러스터 구성을 자동화하는 서비스입니다. 생성된 Confluent Kafka의 Control Center에서 구동 상태 및 이벤트 모니터링, Broker별 리소스 사용 정보 모니터링, 인증 관리 기능 등을 웹 기반 대시보드를 통해 편리하게 관리할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kafka",
			"title": "제공되는 기능은 무엇인가요?",
			"contents": "• Kafka 생성\n - Auto Provisioning : 컨테이너 기반으로 표준 스펙의 Confluent Platform 자동 설치\n• Kafka 관리\n - 가동 관리 : 웹기반 콘솔을 통해 클러스터의 생성, 해지 등 Kafka 서비스 Life Cycle 관리\n - 사용자 Configuration 설정 : Kafka 성능 향상 및 보안 관련된 사용자 Configuration 설정/수정\n - Audit 설정 : Kafka Access 및 수행에 대한 Log 저장 가능\n - 모니터링 : Kafka 상태 모니터링 기능 제공   (Confluent Platform에서 자체 제공하는 모니터링 기능 이용 )"
		},
		{
			"category": "OFFERINGS",
			"section": "Kafka",
			"title": "Kafka를 시작하려면 어떻게 해야 하나요?",
			"contents": "사용자는 SCP Kubernetes Engine을 사용해야 합니다. 만약 그렇지 않은 경우 SCP Kubernetes Engine 사용신청을 통해  사용가능한 워크노드(일반 VM)가 신청합니다.\nSCP Kubernetes Engine에서 프로비저닝한 워커노드(일반 및 GPU VM)를 Kafka의 자원으로 이용하게 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Elasticsearch",
			"title": "Analystic Elasticseach란 무엇입니까?",
			"contents": "삼성 클라우드 플랫폼 환경에서 웹 기반 콘솔을 통해 데이터 분석을 위한 Elasticsearch 생성과 설정을 자동화된 구성과 환경으로 제공합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Elasticsearch",
			"title": "지원되는 Elasticsearch 버전은 무엇입니까?",
			"contents": "현재 Open Source Comunity 버전인 7.6/7.3/5.3 을 제공 중에 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Elasticsearch",
			"title": "고가용성(HA)은 어떻게 지원하나요?",
			"contents": "서비스는 높은 안정성을 보장하는 Virtual Machine을 기반으로 Elasticsearch의 자체 동기화 복제 방식의 클러스터 구성을 통해 고가용성을 보장합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "API Gateway는 어떤 서비스인가요?",
			"contents": "API Gateway는 API를 쉽고 편리하게 관리하고 모니터링하는 서비스입니다.\n현재는 Rest API 방식의 서비스를 제공하고 있으며, 아래와 같은 기능을 가지고 있습니다.\n - 편리한 API 관리\n   . API 등록/상세 정보(리소스, 메소드) 수정 및 버전/배포 관리\n   . Swagger Import로 리소스 등록\n\n - 보안상 안정적인 서비스 제공\n   . API Key 및 IP Whitelist를 통한 사용자 접근 제어\n   . API 사용량 계획 등록(분/시/일/주/년)으로 과도한 트래픽 인입 방지\n\n - 모니터링 서비스 제공\n   . API 호출, 응답 시간 및 오류 발생률에 대한 성능 지표 제공"
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "API Gateway의 요금은 어떻게 되나요?",
			"contents": "API 호출 성공 건수에 대하여 건당 월별 청구되며 상세 요금은 서비스 포탈 내 요금표를 참고 부탁드립니다.\n※ 요금표 : 서비스 포탈 내 [요금 > 요금소개 > 상품별 요금제]"
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "API 등록 시, Endpoint와 연결이 되었는지 확인이 가능한가요?",
			"contents": "네 가능합니다.\n삼성SDS 클라우드 콘솔에 로그인하여 API 상품 화면으로 접속하시어,\nService Product 생성 후 좌측에 [API 관리 > API 등록]에서 'Connection Test' 클릭 시, 확인 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "API Gateway",
			"title": "API 인증 보안을 위한 기능들이 있나요?",
			"contents": "네, API Key 인증과 IP Whitelist로 API를 안전하게 호출할 수 있습니다.\nAPI Key는 Product 생성 시, 자동으로 발급되는 key입니다.\nProduct 생성 시 API 자동 발급 및 key 유효기간을 설정할 수 있으며,\n생성된 Product가 있다면 화면 좌측에 [Products > 해당 Product명] 클릭 후 API Key의 유효기간 설정과 key 재생성을 할 수 있습니다.\n\nIP Whitelist는 API 접근을 허용하는 IP 목록을 지정하는 기능으로\n화면 좌측에 [Products > 해당 Product명 > Whitelist] 탭에서 추가 및 수정, 삭제 하실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "Mail/SMS/Push 는 각각 어떤 서비스 인가요?",
			"contents": "- Email\n   : 메일발송, 예약 발송, 조회, 템플릿 관리까지 제공하는 메일 발송 서비스\n- SMS\n   : SMS/MMS 발송, 예약 발송, 조회, 템플릿 관리까지 제공하는 SMS 발송 서비스\n- Push\n   : 다양한 전송 방법으로 Push알림을 전송하고 그 결과를 조회하는 서비스"
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "API형태로 제공되는 Mail/SMS/Push 서비스 이용 방법이 어떻게 되나요?",
			"contents": "삼성SDS 클라우드 콘솔에 로그인 한 후, 우측 [모든 상품 > Application Service > Mail/SMS/Push]를 통해 상품신청을 합니다.\n이 후, 신청된 각 상품별로 [상품목록 > Mail/SMS/Push] 클릭, [사용자 가이드] 조회를 통해 가이드내 API들을 직접 커스텀하여 사용 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "Public API 와 Private API의 차이가 무엇인가요?",
			"contents": "- Public API : 일반 사용자들에게 공개된 API\n- Private API : 내부에서 사용되는 API (일반 사용자들은 직접 호출할 수 없고 오픈요청을 통해 사용가능)"
		},
		{
			"category": "OFFERINGS",
			"section": "Mail/SMS/Push",
			"title": "SMS서비스와 Push서비스의 차이가 무엇인가요?",
			"contents": "SMS서비스는 전화번호가 있는 대상에게 알림을 보내지만, Push서비스는 전화번호가 없는 Device까지도 알림전송이 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "SCP Kubernetes Engine(SKE) 이란 무엇입니까?",
			"contents": "SCP Kubernetes Engine(SKE)는 자체 Kubernetes 컨트롤 플레인이나 워커 노드를 설치 및 운영할 필요 없이 SCP에서 Kubernetes를 손쉽게 실행할 수 해주는 관리형 서비스입니다.\n\nSCP Kubernetes Engine에서는 SCP 환경에서 컨테이너 애플리케이션을 배포, 관리, 확장할 수 있도록 관리형 Kubernetes를 제공합니다. 사용자는 Kubernetes 컨트롤 플레인이나 워커 노드를 설치 및 운영할 필요 없이 손쉽게 Kubernetes 클러스터를 구성하여 사용할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "Kubernetes란 무엇입니까?",
			"contents": "Kubernetes는 대규모 컨테이너화된 애플리케이션을 배포하고 관리하는 데 사용할 수 있는 오픈 소스 소프트웨어입니다. 상세한 내용은 CNCF의 공식문서를 확인해주세요.\n※ 참고 : https://kubernetes.io/ko"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "SCP Kubernetes Engine(SKE)는 어떻게 구성되어 있나요?",
			"contents": "SCP Kubernetes Engine(SKE)는 Kubernetes 컨트롤 플레인 및 워커노드를 프로비저닝(시작)합니다. \nKubernetes는 실제 애플리케이션 실행을 위한 컨테이너가 실행되는 '워커노드’ 와\n클러스터내 컨테이너들을 오케스트레이션(동작 관리 및 스케쥴링) 및 상태 모니터링 등을 수행하는\n'컨트롤 플레인'이라는 두 가지 주요 구성 요소로 이루어져 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "SCP Kubernetes Engine(SKE)를 사용해야 하는 이유는 무엇입니까?",
			"contents": "SCP Kubernetes Engine(SKE) 없이 컨테이너 환경을 구성하고 싶다면, \n컨트롤플레인과 워커노드 구성을 위한 VM생성부터 Kuberentes 설치 등 \nKubernetes 클러스터 구성을 직접 수행해야 합니다.\n\nSCP Kubernetes Engine(SKE)를 사용하면 SCP 콘솔에서 간단하게 워커 노드를 프로비저닝할 수 있으며, SCP가 보장하는 가용성의 컨트롤 플레인을 제공받을 수 있습니다. 이를 통해 Kubernetes를 실행하는 데 따른 운영 부담을 현저히 줄이고 컨테이너 환경 구성을 위한 노력을 애플리케이션 구축에 활용할 수 있습니다.\n\nSCP는 고가용성 보장을 위해 비정상적인 컨트롤 플레인 노드를 감지하고 교체하며 컨트롤 플레인에 대한 패치를 제공합니다.  또한 다양한 SCP의 상품들과 통합하여 애플리케이션에 확장성과 보안을 강화할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "SCP Kubernetes Engine(SKE)는 어떤 Kubernetes 버전을 지원합니까?",
			"contents": "현재 지원되는 Kubernetes 버전은 콘솔 접속 후 우측 상단의 [매뉴얼 - Kubernetes Engine] 에서 확인 가능합니다.\nSCP Kubernetes Engine(SKE)는 앞으로 더 많은 Kubernetes 버전을 계속해서 지원할 예정입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "Kubernetes 클러스터를 새 버전으로 업데이트할 수 있습니까?",
			"contents": "※ ('21년 10월 릴리즈 기능)\nSCP Kubernetes Engine(SKE)는 Kubernetes 및 SCP Kubernetes Engine(SKE) 플랫폼 버전 모두에 대해 관리형 인플레이스 클러스터 업그레이드를 수행합니다.\n클러스터 작업이 간소화되며 최신 Kubernetes 기능과 SCP Kubernetes Engine(SKE) 구성 업데이트 및 보안 패치를 이용할 수 있습니다.\n새로운 Kubernetes 버전은 SCP Kubernetes Engine(SKE)와 함께 사용할 수 있도록 릴리스되고 검증되었으므로, 안정적인 Kubernetes 버전을 언제든지 업데이트 할 수 있도록 기능을 제공합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Engine",
			"title": "SCP Kubernetes Engine(SKE)의 요금은 어떻게 되나요?",
			"contents": "사용자에게 할당된 Control Plane 및 클러스터에 대한 관리비용은 서비스 포탈 내 요금표를 참고 부탁드리며, 클러스터가 시작된 시점부터 종료될 때까지 시간 단위 요금제로 제공합니다.​\n워커노드는 생성된 VM Type에 따라 시간 단위 요금제로 과금됩니다.\n※ 요금표 : 서비스 포탈 내 [요금 > 요금소개 > 상품별 요금제]"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Apps",
			"title": "Kubernetes Apps는 무엇인가요?",
			"contents": "Kubernetes Apps는 Web/WAS를 비롯한 App Infrastructure 등 다양한 컨테이너 이미지를 Kubernetes Engine으로 생성한 클러스터에 배포하는 기능을 제공하는 서비스입니다.\n다수의 현장 운영 경험을 기반으로 최적화된 설정의 컨테이너 이미지를 제공하기 때문에 손쉬운 Apps 배포가 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Apps",
			"title": "제공되는 기능은 무엇인가요?",
			"contents": "웹 기반 콘솔을 통해 컨테이너 SW 목록 검색부터 Apps 생성/조회/해지까지 사용자가 직접 Self service로 손쉽게 사용이 가능합니다.\nContainer 일체형 구동 환경을 지원하며, 보안이 검증된 표준 스펙의 컨테이너 이미지 제공하기 때문에 안전하게 Apps 생성과 배포가 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubernetes Apps",
			"title": "제공되는 SW는 무엇인가요?",
			"contents": "□ 제공 SW 상품\n(* 제공되는 SW는 공급자에 의해서 별도 고지 없이 변동될 수 있습니다.)\n - App Infrastructure (Web/WAS) : Jboss EAP, JEUS, Tomcat, Wildfly, Apache, Nginx 등\n - App Infrastructure (Messaging) : NATS, RabbitMQ, Zookeeper 등\n - Monitoring : Grafana\n - Base, Lang. Base : Alpine, CentOS, Ubuntu, .NET Core, Node.js, Python 등"
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "프로젝트 당 VPC 몇 개까지 사용할 수 있습니까?",
			"contents": "하나의 프로젝트에 VPC 5개까지 구성할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "기존에 사설망(고객망)에서 사용하던 비공인 IP를 클라우드 환경에서도 그대로 사용할 수 있나요?",
			"contents": "고객망에서 사용하던 비공인IP 도 사용 가능합니다만, 마이그레이션 상황(순차적 이관 등)에 따라 기존 사용하던 비공인IP를 그대로 사용하지 못할 수도 있습니다.\n그리고 기존 사설망(고객망)과 연동을 위해서는 Direct Connect 또는 VPN 상품을 통해 연결해야 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "Reserved IP는 어떤 용도로 사용하는 것인가요?",
			"contents": "기본적으로 VM 생성 시 제공하는 공인IP는 VM 리부팅 또는 이전 시 IP가 변경될 수 있습니다. 그런데 특정 VM을 활용해 외부 인터넷에 오픈된 웹서비스 등을 제공할 때, 변하지 않는 고정 공인IP가 필요할 경우, Reserved IP를 통해 공인IP를 사전에 예약하여 활용할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "VPC",
			"title": "Reserved IP 과금 기준은 어떻게 되나요?",
			"contents": "Reserved IP 과금은 고객이 예약한 시점부터 사용여부와 관계 없이 예약을 해제한 시점까지 시간을 카운팅하여 시간단위로 과금하게 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Security Group",
			"title": "Security Group과 VPC의 방화벽의 차이점은 무엇인가요?",
			"contents": "Networking의 Security Group은 VM을 위한 방화벽입니다. Security Group에서 작성한 방화벽 Rule은 Virtual Server, Auto-Scaling, DB, Load Balancer 등에서 사용할 수 있습니다.\nVPC 상품 내 방화벽 탭에서 설정하는 룰은 VPC Gateway에서 동작합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Security Group",
			"title": "Security Group 이름을 수정할 수 있나요?",
			"contents": "아니요. Security Group을 삭제하고 새로 생성해야 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Load Balancer",
			"title": "Load Balancer에서 생성할 수 있는 서비스는 어떤것이 있나요?",
			"contents": "L4 TCP, L7 HTTP 그리고 L7 HTTPS를 제공합니다.\nHTTP/HTTPS의 경우 URL 패턴에 따라 서비스를 전달할 서버그룹을 다르게 지정할 수 있습니다.\nHTTP와 HTTPS 선택 시 URL 처리 입력이 활성화 되고, HTTPS 입력 시 SSL인증서를 필수로 지정해야 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Load Balancer",
			"title": "Load Balancer는 몇 개까지 생성이 가능한가요?",
			"contents": "LB 인스턴스 사이즈 별로 VPC당 아래와 같이 생성 가능합니다.\n - Small 3개 까지\n - Medium 1개 생성 시 Small 2개 까지 추가 가능\nSmall은 20개, Medium은 100개의 서비스를 생성 할 수 있으며 100개 이상의 서비스를 생성하는 인스턴스를 사용하기 위해서는 서비스데스크에 별도 문의를 통해 Large LB 인스턴스를 생성할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DNS",
			"title": "이미 보유중인 도메인은 등록할 수 없는가요?",
			"contents": "신규 도메인 신청만 가능하며, 기존 고객이 보유 중인 도메인 등록은 아직 안됩니다.\n※ 신규 도메인은 1년 단위로 신청되며, 도메인 등록 건당 사용료(자동연장) 별도 청구됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DNS",
			"title": "쿼리 요금은 없는지요?",
			"contents": "21년에는 무상으로 제공하고, 이후 유상으로 전환할 예정입니다.\n(적용 시 별도 공지예정)"
		},
		{
			"category": "OFFERINGS",
			"section": "GSLB",
			"title": "GSLB는 언제 사용하나요?",
			"contents": "GSLB는 DNS 기반으로 지역별 트래픽 증가시 트래픽을 분산하고 특정 서버 장애시 Fail over하여 서비스가 지속될 수 있도록 하는 상품으로, DC(Data Center)에 문제가 생길 경우에  다른 지역DC로 연결하여 시스템 가용성을 높여줍니다.  "
		},
		{
			"category": "OFFERINGS",
			"section": "GSLB",
			"title": "쿼리당 요금은 없는지요?",
			"contents": "21년에는 무상으로 제공하고, 이후 유상으로 전환할 예정입니다.\n(적용 시 별도 공지예정)"
		},
		{
			"category": "OFFERINGS",
			"section": "VPN",
			"title": "호환되는 VPN장비는 어떤 것이 있나요?",
			"contents": "시스코, 팔로알토, 체크포인트, 주니퍼 등이며 IPsec표준을 통해 연동합니다. \nVPN 표준을 준수했다면 연동 시 문제는 크게 없을 것입니다.\n연동 후 안정화 기간을 두고 점검하길 권고드립니다."
		},
		{
			"category": "OFFERINGS",
			"section": "VPN",
			"title": "대역폭을 더 확대할 수 없는지요?",
			"contents": "현재는 10Mbps이며, 향후 ~30Mbps까지 확대 예정으로 출시 일정으로 추후 공지 예정입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "VPN",
			"title": "VPN장비 임대 서비스는 가능한지요?",
			"contents": "VPN장비 임대서비스는 없습니다. 다만, 반드시 필요한 경우에는 제품스펙, 기간, 요금 등 사전협의를 통해 진행이 가능합니다. 고객지원 서비스데스크(1661-3311) 로 문의하시기 바랍니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS 대응",
			"title": "WAF를 신청하면 DDoS 대응은 자동으로 신청되나요?",
			"contents": "DDoS 대응 상품은 WAF 상품을 이용하는 고객에 한하여 제공됩니다. (Basic 등급에 한함) 다만, DDoS 대응 상품을 이용하기 위해서는 WAF 신청 이후 별도로 신청을 해주셔야 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS 대응",
			"title": "DDoS 대응은 무료인가요?",
			"contents": "WAF상품을 신청하신 고객에게만 별도 신청을 통해 제공하게 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS 대응",
			"title": "애플리케이션 계층도 탐지/차단 제공이 되나요?",
			"contents": "L3,L4 계층 탐지/차단만을 제공하고 있습니다. 추후 제공을 준비 중에 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS 대응",
			"title": "DDoS 탐지시 별도 경보가 발행되나요?",
			"contents": "서비스 가용성을 보장하기 위한 임계치 기반 차단을 제공하나, 별도의 경보를 발행하지는 않습니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "DDoS 대응",
			"title": "대시보드에서는 어떤 정보를 확인할 수 있나요?",
			"contents": "공격유형 TOP 3, 타겟IP Top 3 등의 정보를 확인하실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "모든 서버의 패킷 모니터링이 가능한가요?",
			"contents": "아닙니다. 본 상품에서는 WEB서버, WAS서버에 한하여 패킷 모니터링을 제공하고 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "IDS를 위한 권장 환경이 있을까요?",
			"contents": "4Core 8Memory 이상 사용을 권장드립니다. 권장환경 이하의 서버를 사용시 성능 이슈가 발생할 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "IDS Agent 설치 및 삭제는 누가 하는 것인가요?",
			"contents": "VM에 IDS Agent 설치 및 삭제는 고객이 수행합니다. 서비스 신청 시 E-mail을 통해 관제센터에서 매뉴얼을 제공해 드립니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "IDS 상품의 요금기준이 어떻게 되나요?",
			"contents": "탐지 정책이 적용된 VM 별로 과금하며, VM당 요금은 서비스 포탈 내 요금표를 참고 부탁드립니다.\n※ 요금표 : 서비스 포탈 내 [요금 > 요금소개 > 상품별 요금제]"
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "서비스 약정 기간이 어떻게 되나요?",
			"contents": "서비스 개시 이후 1개월 구독을 원칙으로 합니다. 개시 후 1개월 내 해지를 하시더라도 요금은 1개월 요금이 청구 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "서버를 정지할 경우, 관련된 IDS 상품 이용 요금 정책은 어떻게 되나요?",
			"contents": "IDS 상품 요금은 서버 정지와 무관하게 청구되며, 서비스 해지를 희망하실 경우 별도 계약 해지 신청을 해주시면 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "요금 정산 기준은 어떻게 되나요?",
			"contents": "매월 1일~말일 기준으로 정산하며, 견적 및 청구는 영업대표를 통해서 진행됩니다. 1일 서비스 개시가 아닌 경우, 서비스가 개시되는 시작월과 해지되는 종료월은 일할 요금으로 요금이 산정됩니다. \n(예) IDS 8/15 서비스 개시 (1년 약정)\n     8월 : 8/15~8/31(17일)*일할 요금\n     9월~차년도 7월 : 월 요금\n     차년도 8월 : 8/1~8/14(14일)*일할 요금 "
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "대시보드에서는 어떤 정보를 확인할 수 있나요?",
			"contents": "공격유형 TOP 3, 타겟IP Top 3 등의 정보를 확인하실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "이벤트 탐지시 경보 기준은 어떻게 되나요?",
			"contents": "긴급 건은 1시간 이내, 일반/확인 건은 4시간 이내에 경보가 발송됩니다.\n※ 긴급: 공격 성공이 확인된 경우\n   확인: 공격 성공여부가 불확실하거나, 웹사이트 취약점 존재가 확인된 경우\n   일반: 공격이 시도되었으나, 공격이 실패한 경우"
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "모든 공격이 통보되나요?",
			"contents": "관제 SIEM에 관리하고 있는 자체 Rule을 기준으로 경보가 발행 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "경보 E-mail은 누구에게 발송되나요?",
			"contents": "경보 e-mail은 과제담당자에 발송됩니다. 따라서, IDS 서비스 신청시에는 과제담당자 리스트에 경보 관리 담당자(예: 보안/인프라 담당자)를 반드시 포함시켜 주시기 바랍니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "알려지지 않은 공격도 탐지가 가능한가요?",
			"contents": "보안장비에서 탐지할 수 없는 알려지지 않는 공격은 경보 대상에서 제외됩니다. 단, 공격 패턴 등 룰이 추가 되면 경보 발행이 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "경보 수신인을 변동하고 싶습니다. 어떻게 해야 하나요?",
			"contents": "과제 담당자에게 경보관리 담당자 (보안/인프라 담당자) 변경을 요청하시면 됩니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "IDS",
			"title": "이벤트 탐지 기준은 어떤 방식으로 진행되나요?",
			"contents": "SDS 관제센터에서 설정된 자체 Rule에 의해 이벤트를 탐지하고 있으며, 자동 및 수동 분석을 통해 경보로 발송해 드립니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "탐지 모드에서 공격을 시도한 IP 차단이 되나요?",
			"contents": "탐지모드 운영 시 발생된 이벤트를 수집해서 분석 후 경보를 발송해 드리며, 발송된 경보의 공격자 IP에 대한 선차단을 진행합니다. 해당 공격자 IP가 점검 등에 이용되는 IP일 경우 예외 처리진행을 부탁드립니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "차단된 IP는 얼마나 유지되나요?",
			"contents": "경보가 발행되어 선 차단된 IP는 3개월간 유지되며, 고객이 요청해주실 경우 3개월이 경과되지 않은 시점에 차단 해지가 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "DNS 변경이 필요한가요?",
			"contents": "보호할 대상 도메인의 트래픽을 웹 방화벽으로 경유시키려면, 웹방화벽 전용 DNS 변경을 진행해 주셔야 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "WAF 상품의 요금기준이 어떻게 되나요?",
			"contents": "URL의 트래픽량에 따른 구간별 요금표에 따라 책정합니다. 트래픽량은 URL별 월중 최대 트래픽을 기준으로 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "서비스 약정 기간이 어떻게 되나요?",
			"contents": "서비스 개시 이후 1년 구독을 원칙으로 합니다. 개시 후 1년 내 해지를 하시더라도 요금은 1년 요금이 청구 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "WAF 상품의 요금정산은 어떻게 되나요?",
			"contents": "매월 1일~말일 기준으로 정산하며, 견적 및 청구는 영업대표를 통해서 진행됩니다. 1일 서비스 개시가 아닌 경우, 서비스가 개시되는 시작월과 해지되는 종료월은 일할 요금으로 요금이 산정됩니다. WAF는 서비스 이용월에서 최대 트래픽을 기준으로 요금표를 적용하게 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "서버를 정지할 경우, 관련된 WAF 상품 이용 요금 정책은 어떻게 되나요?",
			"contents": "WAF 상품 요금은 서버 정지와 무관하게 청구되며, 서비스 해지를 희망하실 경우 별도 계약 해지 신청을 해주시면 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "대시보드에서는 어떤 정보를 확인할 수 있나요?",
			"contents": "공격유형 TOP 3, 타겟IP Top 3 등의 정보를 확인하실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "이벤트 탐지시 경보 기준은 어떻게 되나요?",
			"contents": "긴급 건은 1시간 이내, 일반/확인 건은 4시간 이내에 경보가 발송됩니다.\n(WAF는 탐지 모드시에도 발송됩니다.)\n※ 긴급: 공격 성공이 확인된 경우\n   확인: 공격 성공여부가 불확실하거나, 웹사이트 취약점 존재가 확인된 경우\n   일반: 공격이 시도되었으나, 공격이 실패한 경우"
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "모든 공격이 통보되나요?",
			"contents": "관제 SIEM에 관리하고 있는 자체 Rule을 기준으로 경보가 발행 됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "경보 E-mail은 누구에게 발송되나요?",
			"contents": "경보 e-mail은 과제담당자에 발송됩니다. 따라서, WAF 서비스 신청시에는 과제담당자 리스트에 경보 관리 담당자(예: 보안/인프라 담당자)를 반드시 포함시켜 주시기 바랍니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "알려지지 않은 공격도 탐지가 가능한가요?",
			"contents": "보안장비에서 탐지할 수 없는 알려지지 않는 공격은 경보 대상에서 제외됩니다. 단, 공격 패턴 등 룰이 추가 되면 경보 발행이 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "경보 수신인을 변동하고 싶습니다. 어떻게 해야 하나요?",
			"contents": "과제 담당자에게 경보관리 담당자 (보안/인프라 담당자) 변경을 요청하시면 됩니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "WAF",
			"title": "이벤트 탐지 기준은 어떤 방식으로 진행되나요?",
			"contents": "SDS 관제센터에서 설정된 자체 Rule에 의해 이벤트를 탐지하고 있으며, 자동 및 수동 분석을 통해 경보로 발송해 드립니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "웹 취약점 점검 이후 재진단이 하고 싶습니다.",
			"contents": "웹 취약점 점검 완료 후 발견된 취약점에 대해 이행검수를 제공합니다. 취약점에 대해 검수 요청을 해주시면 수동 점검을 수행한 후 결과 Report를 제공해 드립니다. 이행검수 제공기간은 취약점 점검 완료 후 30일 내이며 총 2회까지 요청하실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "점검 도중 취소가 가능한가요?",
			"contents": "점검을 예약하셨더라도 점검이 시작되기 전에 취소가 가능합니다. 또한, 점검이 진행 중인 건은 점검 진행율 50% 미만시에 취소가 가능합니다. 점검 진행율은 점검을 진행하는 총 웹페이지 수를 기준으로 산정됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "점검 일정 설정이 가능한가요?",
			"contents": "근무일 기준으로 점검을 신청한 후 3일 이후부터 진단수행이 가능합니다. (예: 5월 1일 신청시, 5월 4일부터 점검 설정 가능)"
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "점검 완료시 결과 알림은 어떻게 받을 수 있나요?",
			"contents": "점검이 완료되면 사전에 설정하신 E-mail로 완료 여부를 알려드립니다."
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "점검 항목에는 어떤 것들이 있나요?",
			"contents": "총 16개 진단 항목을 중심으로 점검을 수행합니다. \n1) 입력값 검증 부재 : 파일 업로드 취약점, 파일 다운로드 취약점, SQLInjection, Cross-Site Scripting\n2) 취약한 인증 및 접근 통제 : 관리자 페이지 노출\n3) 부적절한 환경 설정 : 불필요 method 지원, 디렉토리 리스팅, 디폴트 페이지 존재, WEB/WAS서버 디폴트 패스워드, Frontpage/Web DAV 솔루션 사용금지(IIS 한정)\n4) 부적절한 에러처리 : 시스템 정보 노출, 에러 페이지 미지정\n5) 중요정보 노출 : 불필요 파일 통한 노출, 중요정보 전송구간 암호화 미적용\n6) 기타 : 불필요 페이지 존재, OpenSSL 버전 취약"
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "검수 결과서의 보관기간은 어떻게 되나요?",
			"contents": "검수 결과서는 점검 완료 시점으로부터 1개월간 보관합니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "어떤 웹브라우저 환경에서도 점검이 가능한가요?",
			"contents": "Internet Explorer, Chrome 등 모든 웹브라우저 환경에 맞는 User-Agent를 설정하실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "웹 취약점 점검 시 무엇을 제공받게 되나요?",
			"contents": "발견된 취약점에 대한 상세 정보 및 대응 방안이 담긴 진단 Report를 받아보실 수 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "웹 취약점 점검 상품의 요금기준이 어떻게 되나요?",
			"contents": "URL 1개에 대한 웹 취약점 점검의 상세 요금은 서비스 포탈 내 요금표를 참고 부탁드립니다.\n※ 요금표 : 서비스 포탈 내 [요금 > 요금소개 > 상품별 요금제]"
		},
		{
			"category": "OFFERINGS",
			"section": "웹 취약점 점검",
			"title": "웹 취약점 점검 상품의 요금정산은 어떻게 되나요?",
			"contents": "점검 신청시 삼성SDS 클라우드 콘솔에서 자동 빌링 청구 됩니다. 다만, Basic Cloud 시스템 문제로 진단을 실패할 경우, 진단할 웹사이트에 정상 접속되지 않는 경우에는 과금 되지 않으며, 진단 Report도 제공되지 않습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "인증서 관리",
			"title": "인증서관리는 어떤 상품인가요? ",
			"contents": "SSL/TLS 인증서를 등록하여 SDS Cloud를 통해 제공되는 웹사이트/어플리케이션을 보호할 수 있습니다. 또한 인증서 조회, 유효기간 만료 알림 설정 등 통합인증서 관리 기능을 제공합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "인증서 관리",
			"title": "인증서 유효기간이 만료되는 것을 어떻게 알 수 있나요? ",
			"contents": "인증서 생성시 인증서의 만료일과 만료 알림을 수신할 대상자의 email을 등록할 수 있습니다. 인증서 만료 1주일전 알람 메일이 발송됩니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow 이란 무엇입니까?",
			"contents": "SCP Kubeflow는 SCP Kubernetes 환경에서 MLOps를 위한 오픈소스 기반의 Machine Learning 플랫폼입니다.\n오픈소스 Kubeflow 및 SCP가 추가 제공하는 Add-on Feature들이 포함된 이미지를 고객의 Kubernetes 클러스터 대상으로 프로비저닝합니다.\n\n* MLOps : Machine Learning Development (Dev)과 Machine Learning Operation (Ops) 통합을 목표로 하는 ML 엔지니어링 방법론"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Kubeflow란 무엇입니까?",
			"contents": "Kubeflow는 개발, 테스트 및 프로덕션 수준의 머신러닝 서비스를 위해 다양한 ML 프레임워크 (scikit-learn, Tensorflow, PyTorch 등) 개발 환경을 제공하고, 모델 학습, 튜닝, 배포 단계에서 편리한 기능과 각 단계를 파이프라인으로 자동화 할 수 있는 Data Scientist 및 ML 엔지니어를 위한 플랫폼입니다. 자세한 사항은 아래를 참고하세요.\n※ 참고 : https://www.kubeflow.org/"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow는 어떻게 구성되어 있나요?",
			"contents": "SCP Kubeflow는 SCP Kubernetes Engine위에서 설치 및 프로비저닝(시작)합니다. \nSCP Kubernetes Engine에서 프로비저닝한 워커노드(일반 및 GPU VM)를 Kubeflow의 관리 및 데이터분석자원으로 이용하게 됩니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow를 사용해야 하는 이유는 무엇입니까?",
			"contents": "SCP Kubeflow 없이 ML 환경을 구성하고 싶다면, Kuberntes 컨트롤플레인과 워커노드 구성을 위한 VM생성부터 네트워크 환경 설정, Kuberentes 설치, 레지스트리 구성, Kubeflow 이미지 설치 등 Kubeflow 구성을 직접 수행해야 합니다. \n\nSCP Kubeflow를 사용하면 SCP 콘솔에서 간단하게 고객의 워커노드 자원에 Kubeflow를 프로비저닝할 수 있으며, \nSCP에서 검증한 Kubeflow버젼과 이를 기반으로 한 다양한 add-on Feature들이 포함된 소프트웨어를 사용할 수 있습니다.  \n\nSCP는 Enterprise 레벨에서 활용할 수 있는 다양한 Machine Learning 기능들을 개발하여 추가하고 있습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow가 지원하는 기능들은 무엇입니까?",
			"contents": "SCP Kubeflow 주요기능은 아래와 같습니다.\n  - Default Feature (.mini)\n    : Jupyter Notebook 제공, 모델 학습/튜닝/배포 관련 Kubeflow SDK 및 툴, Workflow 자동화 (Kubeflow Pipeline)\n  - Add-on Feature (.Enterprise)\n    : Kubernetes GPU Job Scheduling, ML Framework 이미지 (Tensorflow, PyTorch, Keras 등), Kubeflow 모니터링/로깅, 인증연동, Kubeflow 기반 사용자 Portal ('22년 릴리즈 예정)"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow는 어떤 Kubeflow 버전을 지원합니까?",
			"contents": "현재 지원되는 Kubeflow 버전은 콘솔 접속 후 우측 상단의 [매뉴얼 - Kubeflow] 에서 확인할 수 있습니다.\nSCP Kubeflow는 앞으로 지속적으로 오픈소스 Kubeflow 버전을 바탕으로 업데이트할 예정입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow가 설치가능한 Kubernetes 버전은 무엇입니까?",
			"contents": "SCP Kubeflow가 설치 가능한 Kubernetes 버전 확인은 콘솔 접속 후 우측 상단의 [매뉴얼 - Kubeflow] 에서 확인할 수 있습니다.\nKubernetes v1.21 환경에서만 호환가능합니다. ('21.7월 Release 기준)"
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "Kubernetes 클러스터를 새 버전으로 업데이트할 수 있습니까?",
			"contents": "SCP Kubeflow 상품은 새 버전으로 마이그레이션 서비스를 제공하지 않습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow의 요금은 어떻게 되나요?",
			"contents": "Kubeflow가 시작된 시점부터 종료될 때까지 시간 단위 요금제로 제공합니다.​\n소프트웨어에 대한 기본 요금과 설치된 클러스터 vCore에 비례한 라이선스 요금을 과금합니다.\n설치를 위해 준비해야하는 클라우드컴퓨팅 및 Kubernetes Engine 요금은 해당 요금에 따라 과금합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Kubeflow",
			"title": "SCP Kubeflow 서비스 수준 계약(SLA)은 어떻게 되나요?",
			"contents": "SCP Kubeflow는 SW 제공 및 설치 서비스로 별도의 SLA를 제공하지 않습니다. "
		},
		{
			"category": "OFFERINGS",
			"section": "Logging & Audit",
			"title": "Logging&Audit은 어떤 상품인가요? ",
			"contents": "콘솔, Open API 로 이루어지는 사용자 활동내역을 저장하여 클라우드 자원에 대한 변경 추적, 문제 해결, 보안 검사 등에 활용할 수 있습니다.\n별도의 설정 없이 90일간의 활동 내역을 저장하며, 다양한 검색 기능을 활용하여 로그를 분석할 수 있어 효과적인 로그 관리가 가능합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Logging & Audit",
			"title": "Trail 은 어떤 경우에 사용하는 것인가요? ",
			"contents": "Trail을 생성하여, 사용자가 직접 사용자의 오브젝트스토리지에 로그를 저장할 수 있는 기능입니다. Trail을 생성하실때에는 로그를 수집/저장하고자 하는 상품과 사용자계정을 선택하여 생성할 수 있습니다. 사용자 오브젝트스토리지에 저장된 로그는 별도의 저장기간 제한이 없습니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Cloud Monitoring",
			"title": "Cloud Monitoring은 무엇인가요?",
			"contents": "Cloud Monitoring 서비스는 운영 중인 인프라 리소스의 사용현황과 변경 정보, 운영 로그를 수집하여,  사전 지정한 값을 초과할 경우 이벤트를 발생하고, 담당자에게 통보하는 서비스 입니다.\nCloud Monitoring의 주요 특징은 다음과 같습니다.\n  1) 안정적인 컴퓨팅 자원관리 \n    - CPU 사용률, 디스크사용률, 메모리사용률 등의 지표 현황을 간편하게 확인할 수 있으며, 이벤트 발생 시 지정된 대상자에게 자동으로 알림이 통보되어 신속한 장애 분석과  대응이 가능합니다.\n  2) 편리한 모니터링\n    - 프로젝트별 기본 대시보드 및 사용자 정의 대시보드를 제공하며, 다양한 형태의 위젯을 설정해 쉽고 빠르게 대시보드를 설정할 수 있습니다.\n  3) 이벤트 지표 관리\n    - 웹 기반 콘솔을 통해 몇번의 클릭만으로 손쉽게 이벤트 지표를 설정 할 수 있습니다.(이벤트 패턴, 발생조건, 발생주기, 성능지표, 운영 상태 등) 이벤트 지표는 사용환경에 맞게 변경 할수 있으며 임계치 설정과 알람 설정 등을 편리하게 관리할 수 있습니다.\n  4) 리소스 로그 관리\n    - 리소스의 운영로그 데이터를 수집/저장하고 필요 시 대상 로그의 검색을 지원합니다.\n    - 주요 키워드에 대해 이벤트를 지표화하여 사전 설정된 조건 충족 시 지정된 담당자에게 자동 통보 하여 보다 안정적인 운영 환경을 제공 합니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Cloud Monitoring",
			"title": "Cloud Monitoring은 어떤 서비스를 제공하나요?",
			"contents": "Cloud Monitoring은 대시보드, 이벤트/알림, 로그 모니터링 등 리소스를 안정적으로 운영하기 위한 모니터링 서비스를 제공합니다.\n  1) 대시 보드 생성/관리\n    - 프로젝트 대시보드(기본) : 대상 자원, 운영상태, 성능 Top5, 이벤트 맵, 이벤트 리스트\n    - 사용자 정의 대시 보드\n      · 기본 위젯 : Title, 이벤트 목록, Overview(대상수, 유형별 이벤트 수 등), Top5(CPU 사용율, 메모리 사용율 등) 등\n      · 사용자 정의 위젯 : 시계열 그래프, 비교차트, 인스턴스 맵 등\n  2) 이벤트/알림 관리\n    - 이벤트 지표 설정 : 이벤트 패턴, 스케줄링, 발생조건, 대상 정보 등\n    - 사용자 정의 이벤트 제공 : 모니터링 대상, 위험도, 성능항목, 이벤트 룰 등\n  3) 로그 모니터링 \n    - 프로젝트별 로그현황 : 누적로그 수, 일별 로그 발생량/누적율, 대상별 로그 발생량\n    - 로그 수집/저장/검색\n    - 검색된 로그데이터 결과 내보내기(CSV 파일)\n    - 검색 키워드 이벤트 지표화 및 알림 통보\n  4) 연계 상품\n    - 성능 모니터링 : Virtual Server, Bare Metal Server, VM Auto-Scaling, File Storage, VPC, DB 9종, Load Balancer, K8s Engine.\n    - 로그 모니터링 : Virtual Server, Bare Metal Server, K8s Engine, DB 9종\n   ※ 성능/로그 모니터링의 연계 상품은 지속적으로 확대 예정입니다."
		},
		{
			"category": "OFFERINGS",
			"section": "Cloud Monitoring",
			"title": "Cloud Monitoring의 요금은 어떻게 되나요?",
			"contents": "현재 Cloud Monitoring은 무료로 제공되고 있습니다.\n추후 유료로 변경될 시 해당 상품을 이용하는 고객 분들께 사전 안내 드릴 예정이니 참고하시기 바랍니다."
		}
	],
	"PRICING": [{
			"category": "PRICING",
			"section": "요금",
			"title": "요금은 어떻게 산정되나요?",
			"contents": "사용하시는 상품에 따라서 다양한 요금 산정 기준이 적용됩니다. \n약정기간동안 동일한 요금이 발생하는 상품, 이용한 시간만큼 요금이 발생하는 상품, 사용량만큼 과금 되는 상품, 건수만큼 요금이 발생하는 상품, 할당량(사용량)에 따라 할인이 적용되는 상품 등 다양한 과금 기준이 있습니다. \n요금표에 표시된 요금은 부가세 별도이며, 사용 전 상품별 과금 기준을 참고하시기 바랍니다."
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "서비스 미터링 기준 시간대는 무엇인가요?",
			"contents": "현재 서비스 미터링 시간대는 '한국(UTC+9)'입니다."
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "서버 사용료 과금 기준은 어떻게 되나요?",
			"contents": "무약정 또는 1년/3년 약정요금을 선택할 수 있으며, 사용 OS에 따라서 요금이 결정됩니다.\n무약정 선택시 사용한 시간에 따라 시간단위 요금이 적용되며, 서버를 OFF하는 경우에는 서버 사용 요금이 발생하지 않습니다. 서버에 연결된 스토리지 등 서비스가 유지되는 자원의 경우 정상적으로 요금이 발생합니다. "
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "약정 요금 적용 기준은 어떻게 되나요?",
			"contents": "약정을 선택하면 해당 상품의 사용여부와 무관하게 월 과금됩니다. \n약정이 종료된 시점에는 해당 종료시점의 무약정 요금으로 자동 전환됩니다.\n약정 요금은 Compute 등 일부 상품에 한하여 제공됩니다. "
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "서비스 해지 시 위약금이 발생하나요? ",
			"contents": "무약정 요금의 경우 별도의 해지 위약금 없이 언제든지 해지가 가능합니다. \n다만, 약정 요금의 경우는 잔여 약정기간 개월수에 해당하는 총 서비스료의 50%를 해지위약금으로 청구합니다.\n해지 위약금은 해지한 다음달 청구일에 해지일을 기준으로 일할계산된 사용료와 함께 청구됩니다. "
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "스토리지 과금 기준은 어떻게 되나요?",
			"contents": "Block Storage, File Storage는 해당 월의 할당된 용량(GB)에 대해서 과금하며, Object Storage와 Bakcup은 해당 월의 사용한 용량(GB)에 대해서 과금합니다. \n상품 별 상세 과금 기준을 참고하시기 바랍니다. "
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "사용 금액은 언제 확인할 수 있나요?",
			"contents": "사용요금은 삼성SDS 클라우드 콘솔 내 [관리 > 통합 이용관리] 메뉴에서 확인가능하며, 이용내역에서는 일별 요금(예상금액)을 확인 하실수 있고, 청구 내역은 월초에 전월 요금이 확정된 이후에 확인 가능합니다. 이용내역은 예상요금 이므로 청구내역과 상이할 수 있습니다."
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "예상 요금 조회는 어떻게 할 수 있나요?",
			"contents": "삼성SDS 클라우드 서비스 포탈 내 요금계산기를 이용하여 상품별 예상 요금을 조회할 수 있습니다. "
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "용량을 더 많이 사용할수록 할인이 있나요?",
			"contents": "용량 할인 적용 유무는 상품별로 기준이 다릅니다. 예를 들어 스토리지(Block, File, Object, Backup)의 경우 월 할당량(또는 사용량)에 따라 서비스 요금이 계층화 되어있습니다. 즉, 더 많이 사용 할수록 GB당 요금은 줄어듭니다.\n상품별 상세 과금 기준을 참고하시기 바랍니다."
		},
		{
			"category": "PRICING",
			"section": "요금",
			"title": "요금 지급 방법은 어떻게 되나요? 카드 결제 가능한가요?",
			"contents": "현재 카드 결제는 불가하고 향후 카드 결제 서비스를 추가할 수 있도록 준비 예정입니다."
		}
	],
	"MEMBERSHIP": [{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회원 가입 시 회원명을 잘못 입력했습니다. 어떻게 해야 하나요?",
			"contents": "사진, 비밀번호, 선호 언어 등 사용자 정보를 변경할 수 있습니다.\n1. 콘솔 로그인 후 상단 메뉴의 사용자 사진 영역에 마우스를 오버하면 표시되는 상세 정보 중 [계정 정보]를 클릭하면 계정 설정 페이지로 접근합니다.\n2. 하단의 수정버튼을 클릭하면 비밀번호 입력창이 팝업됩니다. \n3. 이름/성/회사/비밀번호/접근제어IP/선호언어/시간대 를 변경할 수 있습니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "가입한 e-mail을 변경하려면 어떻게 해야 하나요?",
			"contents": "가입한 e-mail은 ID로 사용되므로 변경하실 수 없습니다.\n신규 가입하신 후 기존 이용하던 프로젝트에 멤버로 등록을 하거나\nAccount user일 경우 영업대표 또는 서비스데스크(1661-3311)에 문의하여 해당 Account 정보를 새로 가입한 e-mail(ID)로 변경하여 주세요."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "계정(로그인 아이디)을 찾을 수가 없습니다. 어떻게 해야 하나요?",
			"contents": "1. 로그인 페이지 하단의 ID/비밀번호 찾기를 클릭합니다.\n2. ID 찾기에서는 국가번호를 선택하고 모바일 번호를 입력 후 인증 버튼을 클릭합니다.\n3. 모바일로 전송된 인증번호를 입력하고 확인을 클릭합니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "비밀번호를 변경하고 싶습니다. 어떻게 해야 하나요?",
			"contents": "사진, 비밀번호, 선호 언어 등 사용자 정보를 변경할 수 있습니다.\n1. 콘솔 로그인 후 상단 메뉴의 사용자 사진 영역에 마우스를 오버하면 표시되는 상세 정보 중 [계정 정보]를 클릭하면 계정 설정 페이지로 접근합니다.\n2. 하단의 수정버튼을 클릭하면 비밀번호 입력창이 팝업됩니다. \n3. 이름/성/회사/비밀번호/접근제어IP/선호언어/시간대 를 변경할 수 있습니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회원 가입은 어떻게 하나요?",
			"contents": "콘솔을 이용하기 위해서는 먼저 회원가입을 해야합니다.\n1. 로그인 페이지에서 의 [회원가입]을 클릭하세요.\n2. 회원가입 페이지에서 '약관동의' 항목에 대해서 동의에 체크하세요.\n3. Knox 사용자(삼성관계사 사내 계정 사용)일 경우 Yes를 선택해 주세요.\n4. ID(이메일)필드에 메일을 입력 후 중복을 체크하세요. Knox 사용자는 메일 입력 후 유효성을 검증하세요.\n5. 이름/성/회사를 입력하세요. Knox 사용자는 시스템에서 자동으로 정보를 가져옵니다.\n6. 비밀번호는 영문과 숫자, 특수문자(!@#$%&*^)를 조합하여 8~20 문자로 입력 가능합니다.\n7. 콘솔에서 사용할 언어를 선택합니다.\n8. 2단계 인증을 선택합니다. \"사용안함\"을 선택해도 SMS 혹은 이메일을 통해 2단계 인증을 통과해야 로그인 할 수 있습니다.\n9. 접근제어IP를 설정합니다. Yes로 설정하고 IP를 등록한 경우, 등록된 IP를 통해서만 접근이 가능합니다. 신중히 등록해주세요.\n10. 확인를 클릭하여 회원 가입 절차를 완료합니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회원 가입 절차를 완료하지 못하고 포털 사이트를 나올 경우, 가입 과정에서 입력했던 정보는 보관되나요?",
			"contents": "회원 가입 절차를 최종 완료하지 못한 경우, 가입 과정에서 입력했던 정보는 바로 삭제 처리됩니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회사 정보가 변경되었습니다. 어떻게 해야 하나요?",
			"contents": "사진, 비밀번호, 선호 언어 등 사용자 정보를 변경할 수 있습니다.\n1. 콘솔 로그인 후 상단 메뉴의 사용자 사진 영역에 마우스를 오버하면 표시되는 상세 정보 중 [계정 정보]를 클릭하면 계정 설정 페이지로 접근합니다.\n2. 하단의 수정버튼을 클릭하면 비밀번호 입력창이 팝업됩니다. \n3. 이름/성/회사/비밀번호/접근제어IP/선호언어/시간대 를 변경할 수 있습니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "로그인 2차 인증은 무엇인가요?",
			"contents": "2차 인증은 로그인 시 아이디와 비밀번호 입력 후 추가 인증(인증번호 또는 OTP)을 진행해야 로그인을 완료할 수 있도록 설정할 수 있는 이중 보안 서비스입니다.\nID/Password를 입력하면 가입하신 이메일 주소 또는 휴대폰 번호로 One Time Password가 발급됩니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "OTP 2차 인증을 하였는데 메일이 오지 않습니다.",
			"contents": "스팸메일을 확인하여주세요.\n모바일로 인증을 선택하면 One Time Password를 가입하신 휴대폰 번호로 확인 하실 수 있습니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회원 탈퇴는 어떻게 하나요?",
			"contents": "영업대표 또는 서비스데스크(1661-3311)에 문의하여 회원 탈퇴를 요청하여 주세요."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회원정보, 회사정보, 비밀번호를 변경하려면 어떻게 해야 하나요?",
			"contents": "사진, 비밀번호, 선호 언어 등 사용자 정보를 변경할 수 있습니다.\n1. 콘솔 로그인 후 상단 메뉴의 사용자 사진 영역에 마우스를 오버하면 표시되는 상세 정보 중 [계정 정보]를 클릭하면 계정 설정 페이지로 접근합니다.\n2. 하단의 수정버튼을 클릭하면 비밀번호 입력창이 팝업됩니다. \n3. 이름/성/회사/비밀번호/접근제어IP/선호언어/시간대 를 변경할 수 있습니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "비밀번호 분실 시, 비밀번호는 어떻게 찾나요?",
			"contents": "1. 로그인 페이지 하단의 ID/비밀번호 찾기를 클릭합니다.\n2. 비밀번호 찾기에서는 국가번호를 선택하고 모바일 번호를 입력 후 인증 버튼을 클릭합니다. 또는 회원정보에 등록된 e-mail을 기입하고 인증 버튼을 클릭합니다.\n3. 모바일/e-mail로 전송된 인증번호를 입력하고 확인을 클릭합니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "Free Trial을 사용한 후 유료 계정으로 전환하고 싶습니다.",
			"contents": "Free Trial Account로 생성한 프로젝트 및 자원은 체험기간 이후 삭제됩니다.\n영업대표 또는 서비스데스크(1661-3311)에 문의하여 신규 계약을 통해 Account를 생성하면 전체 서비스를 사용할 수 있습니다."
		},
		{
			"category": "MEMBERSHIP",
			"section": "회원",
			"title": "회원으로 등록했습니다. 상품을 이용하기 위해서 결제 정보를 등록하려는데 어디에서 등록할 수 있나요?",
			"contents": "서비스데스크(1661-3311)에 문의하면 영업대표를 통해 안내드리겠습니다."
		}
	],
	"TROUBLE" : [],
	"OTHERS": [{
			"category": "OTHERS",
			"section": "기타",
			"title": "삼성SDS 클라우드 서비스는 어떻게 이용하나요?",
			"contents": "삼성SDS 클라우드 서비스는 서비스 포탈과 콘솔로 구성되어 있습니다.\n서비스 포탈은 상품 소개, 고객 사례, 요금 정보 및 고객지원 등 삼성SDS 클라우드 서비스를 이용하기 위해 필요한 다양한 정보가 설명되어 있습니다.\n콘솔은 실제 삼성SDS 클라우드 상품을 구매하고 고객이 원하는 상품을 설정, 관리할 수 있는 환경을 제공합니다."
		},
		{
			"category": "OTHERS",
			"section": "기타",
			"title": "삼성SDS 클라우드 서비스 포탈에서 지원하는 브라우저는 무엇인가요?",
			"contents": "삼성SDS 클라우드 서비스 포탈에서는 Chrome, Microsoft Edge 의 최신 버전을 지원합니다. (※ IE는 미지원)"
		},
		{
			"category": "OTHERS",
			"section": "기타",
			"title": "고객이 사용한 상품의 이용 내역은 어디서 확인하나요?",
			"contents": "삼성SDS 클라우드 콘솔에 로그인 한 후, 우측 상단의 [관리 > 통합 이용관리] 에서 확인할 수 있습니다.\n고객이 사용한 상품의 이용내역과 상세 이용내역을 모두 확인할 수 있습니다."
		},
		{
			"category": "OTHERS",
			"section": "기타",
			"title": "서비스 이용 시 오류나 개선점이 있다면 어떻게 문의해야 하나요?",
			"contents": "삼성SDS 클라우드 서비스 포탈을 이용하면서 서비스 오류나 장애, 개선 사항이 있으시면 [고객지원 > 문의하기] 를 통해 문의주시면 됩니다."
		}
	]
}