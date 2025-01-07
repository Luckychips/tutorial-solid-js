import * as S from './styles';

const Resumes = () => {
    return (
        <S.Container>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'https://www.10x10.co.kr'}>텐바이텐</S.Title>
                    <S.Employment>2022.07 - 2024.07</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>테크서비스랩 / 웹 프론트엔드 / 프론트엔드 개발 및 기술 리딩</S.Role>
                    <S.Description>
                        20여년 동안 운영되고 있던 운영 프로젝트의 기술부채 해결 및 기존 구성원의 역량 향상에 목표를 가지고 해당 회사에 채용되었습니다.
                        채용 후 컨벤션 통일 및 코드 품질 향상을 위해 회사에는 없던 코드 리뷰 문화를 만들고 정착시키기 위해 많은 노력(주기적인 세미나, 문서 정리, 꾸준한 코멘트)을 기울였고 자리잡게 되었습니다.
                        asp로 유지되고 있던 프로젝트를 백엔드/프론트엔드로 각각 분리하여 저는 그 중에 프론트엔드 파트의 리딩을 맡게 되었습니다.
                        파트를 리딩하여 리액트를 기반으로 하는 mvp를 개발하여 내부 시연까지 마쳤습니다. 이후 작업 중 검색엔진 및 성능 최적화를 위해 ssr 및 미들웨어 구성의 필요성을 느끼게 되어 next.js로 프로젝트를 전환 개발하였습니다.
                        세부 화면들을 작업하며 http 통신을 위해 미들웨어를 구현하였으며, 컴포넌트 테스트 및 원활한 디자인 시스템 적용을 위해 emotion.js과 storybook을 적용했습니다.
                        로그인부터 결제까지 이루어지는 일련의 프로세스들을 테스트까지 진행했습니다.
                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>텐바이텐 (웹) 운영 리뉴얼</S.ProjectItem>
                        <S.ProjectItem>텐바이텐 (웹) 운영 서비스</S.ProjectItem>
                        <S.ProjectItem>텐바이텐 (앱) AOS/IOS</S.ProjectItem>
                        <S.ProjectItem>텐바이텐 (백오피스 - 파트너)</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#ASP</S.SkillTag>
                        <S.SkillTag>#TypeScript</S.SkillTag>
                        <S.SkillTag>#React</S.SkillTag>
                        <S.SkillTag>#NextJs</S.SkillTag>
                        <S.SkillTag>#Vue</S.SkillTag>
                        <S.SkillTag>#Vuex</S.SkillTag>
                        <S.SkillTag>#Webpack</S.SkillTag>
                        <S.SkillTag>#Recoil</S.SkillTag>
                        <S.SkillTag>#Emotion</S.SkillTag>
                        <S.SkillTag>#Storybook</S.SkillTag>
                        <S.SkillTag>#Java (Android)</S.SkillTag>
                        <S.SkillTag>#Objective-C</S.SkillTag>
                        <S.SkillTag>#Swift</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'https://iheuron.com'}>휴런</S.Title>
                    <S.Employment>2021.04 - 2022.04</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발본부 / 프론트엔드 파트 리더 / 프론트엔드 총괄 개발 및 관리</S.Role>
                    <S.Description>
                        입사 후 프론트엔드 파트 리더를 맡아 기획자, 디자이너, 백엔드 개발자와의 기본적인 협업 및 관리 업무 이외에도 뇌 질환을 연구하고 검증하는 알고리즘 등을 개발하는
                        연구원들과의 협업도 같이 진행했습니다. 일반적인 웹 어플리케이션이 아닌 의료 분야의 데이터를 가공하고 분석 후 관련 내용들을 출력해주는 처음 경험해보는 업무들을 맡았기에 어려움이 많았습니다.
                        이런 어려움을 해소하기 위해 개발 쪽으로는 의료 데이터의 지속적인 분석과 분석된 데이터들을 표시해주기 위해 관련 알고리즘, webgl 등의 기술들을 연구했습니다.
                        뇌질환(뇌졸중,치매,파킨슨,종양) 검사를 보조하는 6가지 소프트웨어의 웹 프론트엔드를 리딩하여 리액트 및 빌드 기반 환경으로 프로젝트를 구성하고 자바스크립트에서 타입스크립트로 전환하는
                        단계를 거치면서 제품 개발을 했고 제품 검증을 위해 각 구성원 간 코드리뷰를 꼼꼼하게 진행했으며 단위 테스트 및 e2e 테스트 환경도 구성했습니다.
                        이런 과정들이 있었기에 온 프레미스 기반으로 맡았던 제품들이 출시되었습니다.
                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>mPDia-cloud</S.ProjectItem>
                        <S.ProjectItem>Atrophy</S.ProjectItem>
                        <S.ProjectItem>cAspects</S.ProjectItem>
                        <S.ProjectItem>cElvo</S.ProjectItem>
                        <S.ProjectItem>cHs</S.ProjectItem>
                        <S.ProjectItem>Meta-Finder</S.ProjectItem>
                        <S.ProjectItem>기타 백오피스 (전 제품군 관리)</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#TypeScript</S.SkillTag>
                        <S.SkillTag>#React</S.SkillTag>
                        <S.SkillTag>#Webpack</S.SkillTag>
                        <S.SkillTag>#Recoil</S.SkillTag>
                        <S.SkillTag>#SWR</S.SkillTag>
                        <S.SkillTag>#Emotion</S.SkillTag>
                        <S.SkillTag>#Dicom</S.SkillTag>
                        <S.SkillTag>#Nifti</S.SkillTag>
                        <S.SkillTag>#Cornerstone</S.SkillTag>
                        <S.SkillTag>#vtk</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'https://www.onemedics.net'}>원메딕스인더스트리</S.Title>
                    <S.Employment>2020.04 - 2021.04</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발팀 / btoc개발팀장 / 프론트엔드 앱,웹 개발 및 운영,관리</S.Role>
                    <S.Description>
                        도수m 서비스를 기획부터 참여하여 개발을 진행했습니다. 개발 업무 이외에도 매니징 업무도 병행하며 기술적 기여 이외에 조직 구성원들의 역량 향상도 개인적인 성과로 두게 되었습니다.
                        병원에서 사용하는 웹 어플리케이션을 리액트 기반으로 개발을 진행했습니다.
                        개인적으로 클린코드를 지향하고 있습니다. 그래서인지 리액트로 주로 개발을 하게 되면서 겪게 되는 이슈 중 prop drilling에 대해 고민을 하게 되었습니다.
                        고민을 하면서 상태관리는 개념을 알게 되고 동료들과의 꾸준한 논의를 통해 원활하게 상태관리를 할 수 있는 라이브러리들을 (redux -> context-api -> recoil) 사용하여 개발을 진행했습니다.
                        그리고 백엔드 개발자와 원활한 협업을 위해 데이터 구조를 꾸준히 동기화하는 작업도 codegen과 graphql을 사용하여 개발했습니다.
                        코드리뷰 및 테스트 환경(jest, cypress)도 구성했고 이러한 사항들이 제품 품질에 크게 영향을 준다는 경험을 갖고 앱 개발을 시작하게 되었으며 리액트 네이티브를 도입하여 앱 개발을 하게 되었습니다.
                        앱의 경우 전 범위는 아니지만 일부분 테스트 및 배포 환경(detox, fastlane)도 적용했으며 이후 앱 런칭도 직접 진행하였고 후에 전반적인 관리업무를 맡았습니다.
                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>도수M 예약서비스</S.ProjectItem>
                        <S.ProjectItem>도수M 예약관리시스템</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#TypeScript</S.SkillTag>
                        <S.SkillTag>#React</S.SkillTag>
                        <S.SkillTag>#React Native</S.SkillTag>
                        <S.SkillTag>#Webpack</S.SkillTag>
                        <S.SkillTag>#Recoil</S.SkillTag>
                        <S.SkillTag>#Detox</S.SkillTag>
                        <S.SkillTag>#Cypress</S.SkillTag>
                        <S.SkillTag>#codegen</S.SkillTag>
                        <S.SkillTag>#graphql</S.SkillTag>
                        <S.SkillTag>#jest</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'https://www.hogyster.com'}>호기스터</S.Title>
                    <S.Employment>2019.08 - 2019.12</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Projects>
                        <S.ProjectItem>셀렉츄</S.ProjectItem>
                        <S.ProjectItem>Rateply</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#TypeScript</S.SkillTag>
                        <S.SkillTag>#React</S.SkillTag>
                        <S.SkillTag>#React Native</S.SkillTag>
                        <S.SkillTag>#graphql</S.SkillTag>
                        <S.SkillTag>#AI</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'https://www.ryencatchers.com'}>라이앤캐처스</S.Title>
                    <S.Employment>2019.01 - 2019.07</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발팀 / 과장 / 서버 및 프론트엔드 개발,유지보수</S.Role>
                    <S.Description>

                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>Bibly</S.ProjectItem>
                        <S.ProjectItem>Time2Talk</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#React</S.SkillTag>
                        <S.SkillTag>#React Native</S.SkillTag>
                        <S.SkillTag>#Java</S.SkillTag>
                        <S.SkillTag>#Spring Framework</S.SkillTag>
                        <S.SkillTag>#Socket.io</S.SkillTag>
                        <S.SkillTag>#nodeJs</S.SkillTag>
                        <S.SkillTag>#AWS</S.SkillTag>
                        <S.SkillTag>#AI</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'https://marketit.imweb.me'}>마켓잇</S.Title>
                    <S.Employment>2017.07 - 2018.12</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발팀 / 매니저 / 서버 및 프론트엔드 개발,운영,관리</S.Role>
                    <S.Description>
                        SNS의 데이터들을 정제하여 광고주에게 공급하였으며, 회사의 꾸준한 캐시카우로서 매출 상승에 기여하였습니다.
                        해당 소프트웨어는 광고주뿐만 아니라 내부 직원(영업, 마케팅)들도 사용하였는데 평소에 불편한 요구사항들을 수집하여 소프트웨어의 사용성 및 성능을 개선하였습니다.
                        angular.js와 php 기반의 소프트웨어입니다.
                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>마켓잇샵</S.ProjectItem>
                        <S.ProjectItem>마켓잇 CRM</S.ProjectItem>
                        <S.ProjectItem>마켓잇 App</S.ProjectItem>
                        <S.ProjectItem>마켓잇 Bots</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#PHP</S.SkillTag>
                        <S.SkillTag>#AngularJS</S.SkillTag>
                        <S.SkillTag>#VueJs</S.SkillTag>
                        <S.SkillTag>#Gulp</S.SkillTag>
                        <S.SkillTag>#Objective-c</S.SkillTag>
                        <S.SkillTag>#jQuery</S.SkillTag>
                        <S.SkillTag>#MySQL</S.SkillTag>
                        <S.SkillTag>#AWS</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title closed>클리퍼웍스</S.Title>
                    <S.Employment>2014.03 - 2017.06</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발팀 / 책임연구원 / 개발총괄 및 운영,영업</S.Role>
                    <S.Description>
                        창업 초기 합류하여 여행 상품 큐레이션 서비스인 여행아지트의 전반적인 프로덕트들을 단계별로 개발했습니다.
                        지도를 기반으로 하는 타임라인 정리 및 경로를 추천하는 웹서비스(mvp), 여행사의 상품들을 큐레이션해주는 사용자 앱, 관련 데이터들을 관리해주는 백오피스 제품들을 관리 및 개발했습니다.
                        스타트업 초기 특성 상 한가지 영역만 개발할 수 없었기에 제가 가지고 있는 역량 및 범위를 넓힐 수 밖에 없었고, 실제로 많이 발전했으며 개발 및 업계에 대한 전반적인 시야가 트이게 되었습니다.
                        사용자가 많지 않은 시기에 최대한의 리소스 절감을 위해 클라우드 환경을 구성하게 되었고 AWS를 학습하여 활용했습니다.
                        당시 ec2로 구성되고 배포되는 서비스도 비용이 많이 발생된다고 생각되어 서버리스의 형태로 아키텍쳐를 구성했고 (rds, lambda, dynamodb 등) 이전에는 경험이 없었던
                        ios의 앱 개발도 맡아서 진행했습니다. 그리고 이 시기 한창 트렌디했던 angular.js를 찾아보고 웹서비스 및 백오피스에 적용한 경험이 있습니다.
                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>MapEdition</S.ProjectItem>
                        <S.ProjectItem>여행아지트</S.ProjectItem>
                        <S.ProjectItem>네일뭐해</S.ProjectItem>
                        <S.ProjectItem>핀수영협회 웹사이트</S.ProjectItem>
                        <S.ProjectItem>핀수영협회 참가신청사이트</S.ProjectItem>
                        <S.ProjectItem>음원관리시스템 백오피스</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#Java</S.SkillTag>
                        <S.SkillTag>#Swift</S.SkillTag>
                        <S.SkillTag>#AngularJs</S.SkillTag>
                        <S.SkillTag>#Postgres</S.SkillTag>
                        <S.SkillTag>#AWS</S.SkillTag>
                        <S.SkillTag>#Serverless</S.SkillTag>
                        <S.SkillTag>#Spring Framework</S.SkillTag>
                        <S.SkillTag>#NoSQL</S.SkillTag>
                        <S.SkillTag>#WordPress</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title closed>인문티비</S.Title>
                    <S.Employment>2013.07 - 2014.02</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발팀 / 사원 / 자바 기반의 인문학 웹서비스 개발</S.Role>
                    <S.Description>

                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>인문티비</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#Java</S.SkillTag>
                        <S.SkillTag>#Spring Framework</S.SkillTag>
                        <S.SkillTag>#전자정부프레임워크</S.SkillTag>
                        <S.SkillTag>#jQuery</S.SkillTag>
                        <S.SkillTag>#JSP</S.SkillTag>
                        <S.SkillTag>#MySQL</S.SkillTag>
                        <S.SkillTag>#Procedure</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title closed>유아이투</S.Title>
                    <S.Employment>2012.05 - 2013.06</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발연구소 / 사원 / 프레임워크 기반의 물류 추적 시스템 통합 및 구축</S.Role>
                    <S.Description>

                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>traceit</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#Java</S.SkillTag>
                        <S.SkillTag>#Spring Framework</S.SkillTag>
                        <S.SkillTag>#전자정부프레임워크</S.SkillTag>
                        <S.SkillTag>#jQuery</S.SkillTag>
                        <S.SkillTag>#JSP</S.SkillTag>
                        <S.SkillTag>#iBatis</S.SkillTag>
                        <S.SkillTag>#Hibernate</S.SkillTag>
                        <S.SkillTag>#lucene</S.SkillTag>
                        <S.SkillTag>#google web toolkit</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
            <S.Item>
                <S.Figure>
                    <S.Title onClick={() => window.location.href = 'http://www.aceproject.co.kr'}>에이스프로젝트</S.Title>
                    <S.Employment>2011.12 - 2012.02</S.Employment>
                </S.Figure>
                <S.FigureCaption>
                    <S.Role>개발팀 / 인턴 / 소셜웹게임 개발 및 유지보수</S.Role>
                    <S.Description>

                    </S.Description>
                    <S.Projects>
                        <S.ProjectItem>플레이볼</S.ProjectItem>
                    </S.Projects>
                    <S.TagContainer>
                        <S.SkillTag>#Java</S.SkillTag>
                        <S.SkillTag>#Spring Framework</S.SkillTag>
                        <S.SkillTag>#전자정부프레임워크</S.SkillTag>
                        <S.SkillTag>#jQuery</S.SkillTag>
                        <S.SkillTag>#freemarker</S.SkillTag>
                    </S.TagContainer>
                </S.FigureCaption>
            </S.Item>
        </S.Container>
    );
}

export default Resumes;
