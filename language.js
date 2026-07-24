const translations = {
  en: {
    nav_overview: "Overview",
    nav_real2sim: "Real-to-Sim",
    nav_agents: "AI Agents",
    nav_sim2real: "Sim-to-Real",
    nav_interaction: "Interaction",
    nav_papers: "Papers",
    nav_reach: "Reach",
    nav_videos: "Videos",
    hero_eyebrow: "Ehime University Computer Science Lab · Taiyo Yuden · Mirabot",
    hero_title: "Closing the Industrial Physical AI Gap with Digital Twins",
    hero_subtitle:
      "Industrial robots still struggle with changing factories, unsafe trial-and-error, and hard-to-verify AI plans. We position digital twins as the training, verification, and feedback layer for AI-native industrial robot systems.",
    hero_cta_platform: "Explore the platform",
    hero_cta_video: "Watch videos",
    hero_cta_collab: "Collaborate",
    strip_paper: "Paper",
    strip_video: "Video",
    overview_kicker: "Research Overview",
    overview_title: "Making industrial robots learn safely before they act",
    overview_lead:
      "We target factories, shipyards, boiler rooms, and inspection sites where robot testing is expensive, risky, and environment-specific. The project builds a closed-loop Physical AI platform that models the site, verifies multi-robot plans, deploys to real robots, and feeds field changes back into simulation.",
    mission_problem_label: "Problem",
    mission_problem_title: "Industrial AI cannot rely on trial-and-error in the field",
    mission_problem_text:
      "Real sites change, robot failures are costly, and pure LLM control is difficult to verify before deployment.",
    mission_position_label: "Position",
    mission_position_title: "Digital twins become the operating layer for Physical AI",
    mission_position_text:
      "Real-to-Sim, Prime/Slave agents, Sim-to-Real, and Sim-to-Real-to-Sim are treated as one industrial robot intelligence loop.",
    mission_goal_label: "Goal",
    mission_goal_title: "Verified autonomy for AI-native industrial robot systems",
    mission_goal_text:
      "The goal is to let robots understand work sites, plan safely, execute tasks, and continuously update the digital twin from field evidence.",
    lab_video_kicker: "Lab Robot Showcase",
    lab_video_title: "HIME: an AI agent robot from Ehime University",
    lab_video_text:
      "HIME brings our work on AI agents, autonomous navigation, and physical robot systems together in a laboratory-developed platform.",
    lab_video_caption: "Introducing HIME, our laboratory-developed AI agent robot.",
    card_real2sim_title: "Real-to-Sim",
    card_real2sim_text: "Convert real industrial spaces, objects, dimensions, and layouts into simulation-ready assets.",
    card_agents_title: "AI-Native Industrial System",
    card_agents_text: "Use Prime Agent and Slave Agent architecture to plan, schedule, verify, and execute robot tasks.",
    card_sim2real_title: "Sim-to-Real",
    card_sim2real_text: "Train and validate navigation, inspection, and manipulation behavior before physical deployment.",
    card_interaction_title: "Sim-to-Real-to-Sim",
    card_interaction_text: "Sense field changes, evaluate robot behavior, and incrementally update the virtual environment.",
    real2sim_kicker: "Pillar 01 · Real-to-Sim",
    real2sim_title: "Generating simulation-ready industrial environments from real-world data",
    real2sim_intro:
      "The Real-to-Sim stream builds reusable digital-twin assets: static spaces, object-level 3D models, physical attributes, scale correction, and automatic layout generation.",
    real2sim_figcap: "Animated Real-to-Sim workflow for turning real-world data into simulation assets.",
    real2sim_subtitle: "From single-image initialization to multi-sensor metric reconstruction",
    real2sim_body:
      "Our published ITC-CSCC 2026 work converts a single photograph into reusable 3D assets and an initial layout. We are extending the pipeline to Odin1 LiDAR + RGB + IMU, moving from dimension estimation to measured scale constraints.",
    real2sim_li1: "86 object instances across 9 categories evaluated for scale accuracy",
    real2sim_li2: "Mean scale error: 11.96% in the single-image baseline",
    real2sim_li3: "50 placement trials achieved 100% spatial-relation and collision-free success",
    real2sim_li4: "Current pipeline handles 166 models with dimension correction and physical-attribute generation",
    scale_figcap: "Real-to-Sim modeling stability test: generated objects compared with the real scene.",
    odin_figcap: "Second Real-to-Sim stability test showing virtual reconstruction consistency.",
    agents_kicker: "Pillar 02 · Prime Agent / Slave Agent",
    agents_title: "AI-native intelligent industrial systems for multi-robot work",
    agents_intro:
      "The industrial system uses a Prime Agent for global task planning, resource assignment, scheduling, and formal verification, while Slave Agents execute robot-local navigation, sensing, and manipulation.",
    agents_subtitle: "Reliable planning instead of raw LLM control",
    agents_body:
      "The Prime Agent integrates natural-language task understanding with PDDL planning, PPLTL temporal logic, DAG parallelization, and model checking. The goal is not just to generate plans, but to verify that robot behavior satisfies task goals and industrial rules before execution.",
    sim2real_kicker: "Pillar 03 · Sim-to-Real",
    sim2real_title: "Deploying validated intelligence to real and simulated robot bodies",
    sim2real_intro:
      "Sim-to-Real connects trained and verified behaviors to Go2, robot arms, sensors, ROS 2/Nav2, Jetson edge computing, and inspection-management software.",
    sim2real_figcap: "Physical robot operation and field-oriented inspection scenarios.",
    sim2real_subtitle: "From simulation task execution to field-ready robot modules",
    sim2real_body:
      "The system already includes Go2 navigation, map/route visualization, waypoint management, scheduled inspection tasks, image acquisition in Isaac Sim, robot-arm introduction, Rviz connection, and showroom model import into Isaac Lab.",
    interaction_kicker: "Pillar 04 · Physical-Virtual Interaction",
    interaction_title: "Closing the loop from field sensing back to the digital twin",
    interaction_intro:
      "The final layer is Sim-to-Real-to-Sim: physical robots sense changes in the field, update object poses or generate new assets, and allow the Prime Agent to replan using the refreshed virtual environment.",
    interaction_figcap: "Field changes are detected, localized, and incrementally reflected into Isaac Sim.",
    interaction_subtitle: "Incremental updates instead of rebuilding the whole scene",
    interaction_body:
      "The current design distinguishes moved, new, and disappeared objects. Moved objects update pose only; new objects trigger measurement, 3D generation or retrieval, and USD insertion; updated scenes are checked for collisions, overlaps, and blocked paths.",
    evidence_kicker: "Integrated Evidence",
    evidence_title: "Progress across modeling, intelligence, deployment, and interaction",
    metric_pillars_label: "integrated pillars",
    metric_pillars_text: "Real-to-Sim, AI-native agent system, Sim-to-Real, and Physical-Virtual interaction.",
    metric_models_label: "model workflow scale",
    metric_models_text: "Odin1-based processing flow for recognition, measurement, 3D generation, correction, and attributes.",
    metric_prime_label: "Prime Agent E2E success",
    metric_prime_text: "Formal-planning pipeline improved over the LLM-only baseline in evaluated tasks.",
    metric_go2_label: "Go2 robots in simulation",
    metric_go2_text: "Multi-robot navigation execution has been checked in Isaac Sim as the next integration target.",
    pub_kicker: "Publications",
    pub_title: "Conference papers from the project",
    pub_lead:
      "The paper folder contains peer-facing outputs covering indoor reconstruction, Real-to-Sim asset generation, heterogeneous multi-robot task planning, and symbolic environment modeling for verification.",
    roadmap_kicker: "2025-2027 Roadmap",
    roadmap_title: "Toward an AI-native intelligent factory",
    roadmap_2025_title: "Foundation built",
    roadmap_2025_text:
      "H100/RTX infrastructure, Isaac/Gazebo/Genesis environments, Go2 prototype, SLAM navigation, and initial multi-agent robot control.",
    roadmap_2026_title: "Domain implementation",
    roadmap_2026_text:
      "Shipyard and boiler-room digital twins, Prime/Slave agent training, management app integration, and field sensing for sim-real feedback.",
    roadmap_2027_title: "Operational validation",
    roadmap_2027_text:
      "Multi-robot inspection, delivery, anomaly reporting, and digital-twin-driven replanning in real industrial sites.",
    team_kicker: "People and Partners",
    team_title: "Built by a university lab with industrial deployment partners",
    team_lead:
      "The project is led by Ehime University researchers and developed with industrial partners who bring robot deployment context, field requirements, and implementation support.",
    team_ehime: "Computer Science Lab, Graduate School of Science and Engineering",
    team_taiyo: "Industrial collaboration and robot-related deployment context",
    team_mirabot: "Robotics collaboration and physical AI implementation support",
    team_leadership_title: "Project leadership",
    team_photo_caption: "Our research team at ITC-CSCC 2026.",
    team_researchers_title: "Student researchers",
    bio_wang_role: "Project Lead / Computer Systems",
    bio_wang_text:
      "Dr. Senling Wang is a lecturer in the Graduate School of Science and Engineering at Ehime University and leads this project. His research spans dependable computer systems, VLSI testing and fault diagnosis, reconfigurable computing, hardware security, and machine-learning-assisted testing and reliability. Building on this systems background, he develops digital-twin and Physical AI platforms that connect environment modeling, verified AI-agent planning, robot simulation, and industrial field validation.",
    bio_takahashi_role: "Project Director / Computer Systems",
    bio_takahashi_text:
      "Prof. Hiroshi Takahashi is a professor in the Graduate School of Science and Engineering at Ehime University and serves as Project Director. His long-running research covers computer-system design and testing, VLSI fault testing and diagnosis, dependable and fault-tolerant computing, reconfigurable logic, and hardware security. In this project, he provides academic and systems leadership for integrating reliable computing, formal verification, digital twins, and industrial robotics.",
    member_li_role: "Embedded Systems / Real-to-Sim",
    member_li_bio:
      "Kerun Li is a second-year master's student in the Graduate School of Science and Engineering at Ehime University, specializing in embedded systems development. His work spans robot SLAM and navigation, computer vision, generative AI, and Real-to-Sim 3D scene reconstruction. As first author of the team's single-photograph Real-to-Sim pipeline, he develops methods that turn real observations into reusable 3D assets and physically plausible simulation scenes. He holds two utility model registrations, two registered designs, and one software copyright, with one invention patent application under examination. As an undergraduate, he was named an Outstanding Graduate of Zhejiang Province and received the Zhejiang Provincial Government Scholarship.",
    member_kuzuhara_role: "Cybersecurity / Formal Verification",
    member_kuzuhara_bio:
      "Tomoki Kuzuhara is a second-year master's student in the Graduate School of Science and Engineering at Ehime University, specializing in cybersecurity. He develops and verifies the Prime Agent and builds knowledge bases for industrial fields. As first author of Env2FSA, he studies visual grounding, PDDL-consistent symbolic environment modeling, and counterexample-guided formal verification of robot behavior controllers.",
    member_ono_role: "Image Processing / Environment Modeling",
    member_ono_bio:
      "Shintaro Ono is a second-year master's student in the Graduate School of Science and Engineering at Ehime University, specializing in image processing. His project work covers static spatial model generation, analog meter digitization, and in-field change detection. As first author of a comparative study of indoor reconstruction methods, he evaluates BEV, heightmap, and plane-based approaches for generating simulation-ready static geometry from LiDAR point clouds.",
    member_shen_role: "Planning Optimization / Multi-Robot Systems",
    member_shen_bio:
      "Jingjing Shen is a second-year master's student in the Graduate School of Science and Engineering at Ehime University, specializing in planning optimization. She designs and validates action-planning agents. As first author of the team's language-driven heterogeneous multi-robot planning framework, she studies natural-language task decomposition, capability-aware team formation and allocation, structured experience memory, and feedback-driven plan repair.",
    link_researchmap: "researchmap",
    link_google_scholar: "Google Scholar",
    link_kaken: "KAKEN",
    reach_kicker: "Global Reach",
    reach_title: "Where this research is being discovered",
    reach_lead: "Aggregate page views and country-level reach since analytics was enabled on 24 July 2026.",
    reach_total_label: "Total page views",
    reach_updated: "Updated periodically",
    reach_privacy: "Cookie-free aggregate analytics. No IP addresses are stored.",
    reach_countries_title: "Country-level audience",
    reach_countries_text: "Explore aggregate visits by country and page.",
    reach_open_dashboard: "Open dashboard",
    footer_note: "Public research site with privacy-friendly aggregate access analytics.",
    contact_title: "Open for research collaboration",
    contact_text:
      "We are looking for partners interested in industrial digital twins, AI-native factory systems, field robotics, multi-robot planning, sim-to-real validation, and physical-virtual interaction.",
    contact_button: "Contact the lab",
    videos_kicker: "Research Media Index",
    videos_title: "Videos",
    videos_lead:
      "A curated public subset of demonstrations from the project. Internal progress recordings and unfinished development clips are intentionally omitted from this page.",
    videos_note:
      "Some MOV files may not play in every browser. Use the direct file link below each player if playback fails."
  },
  ja: {
    nav_overview: "概要",
    nav_real2sim: "Real-to-Sim",
    nav_agents: "AIエージェント",
    nav_sim2real: "Sim-to-Real",
    nav_interaction: "インタラクション",
    nav_papers: "論文",
    nav_reach: "アクセス",
    nav_videos: "動画",
    hero_eyebrow: "愛媛大学 計算機システム研究室 · 太陽誘電 · ミラボット",
    hero_title: "デジタルツインで産業用Physical AIのギャップを埋める",
    hero_subtitle:
      "変化し続ける現場、安全に試行錯誤できない制約、検証しにくいAI計画。私たちはデジタルツインを、AIネイティブ産業ロボットの訓練・検証・フィードバック基盤として位置付けています。",
    hero_cta_platform: "研究基盤を見る",
    hero_cta_video: "動画を見る",
    hero_cta_collab: "共同研究",
    strip_paper: "論文",
    strip_video: "動画",
    overview_kicker: "研究概要",
    overview_title: "産業ロボットが動く前に、安全に学習・検証できる基盤を作る",
    overview_lead:
      "対象は、工場、造船所、ボイラー室、点検現場など、実機実験が高コストで危険を伴い、環境依存性も高い場所です。本研究は、現場をモデル化し、複数ロボットの計画を検証し、実機へ展開し、現場の変化を再びシミュレーションへ戻す閉ループ型Physical AI基盤を構築します。",
    mission_problem_label: "課題",
    mission_problem_title: "産業AIは現場での試行錯誤に頼れない",
    mission_problem_text:
      "現場は変化し、ロボットの失敗は高コストであり、LLMだけによる制御は実行前の検証が難しいという課題があります。",
    mission_position_label: "位置付け",
    mission_position_title: "デジタルツインをPhysical AIの運用層にする",
    mission_position_text:
      "Real-to-Sim、Prime/Slave Agent、Sim-to-Real、Sim-to-Real-to-Simを、産業ロボット知能の一つの循環系として統合します。",
    mission_goal_label: "目標",
    mission_goal_title: "AIネイティブ産業ロボットシステムの検証可能な自律性",
    mission_goal_text:
      "ロボットが作業現場を理解し、安全に計画し、実行し、現場データに基づいてデジタルツインを継続更新できることを目指します。",
    lab_video_kicker: "実機ロボット紹介",
    lab_video_title: "愛媛大学発 AIエージェントロボット「HIME」",
    lab_video_text:
      "HIMEは、AIエージェント、自律ナビゲーション、実機ロボットシステムに関する我々の研究を統合した、研究室開発のロボットプラットフォームです。",
    lab_video_caption: "研究室で開発したAIエージェントロボット「HIME」の紹介動画。",
    card_real2sim_title: "Real-to-Sim",
    card_real2sim_text: "実世界の産業空間、物体、寸法、レイアウトをシミュレーション可能な資産へ変換します。",
    card_agents_title: "AIネイティブ産業システム",
    card_agents_text: "Prime AgentとSlave Agentにより、ロボット作業の計画、スケジューリング、検証、実行を行います。",
    card_sim2real_title: "Sim-to-Real",
    card_sim2real_text: "ナビゲーション、点検、操作行動を仮想環境で訓練・検証し、実機へ展開します。",
    card_interaction_title: "Sim-to-Real-to-Sim",
    card_interaction_text: "現場変化をセンシングし、ロボット行動を評価し、仮想環境を段階的に更新します。",
    real2sim_kicker: "第1の柱 · Real-to-Sim",
    real2sim_title: "実世界データからシミュレーション可能な産業環境を生成する",
    real2sim_intro:
      "Real-to-Simでは、静的空間、物体単位の3Dモデル、物理属性、スケール補正、自動レイアウト生成を含む再利用可能なデジタルツイン資産を構築します。",
    real2sim_figcap: "実世界データをシミュレーション用資産へ変換するReal-to-Simワークフロー。",
    real2sim_subtitle: "単一画像初期化からマルチセンサによる実寸復元へ",
    real2sim_body:
      "我々のITC-CSCC 2026論文では、単一写真から再利用可能な3D資産と初期レイアウトを生成します。現在はOdin1のLiDAR、RGB、IMUへ拡張し、寸法推定から実測スケール制約へ進化させています。",
    real2sim_li1: "9カテゴリ86物体でスケール精度を評価",
    real2sim_li2: "単一画像ベースラインの平均スケール誤差は11.96%",
    real2sim_li3: "50回の配置実験で空間関係と非衝突の成功率100%",
    real2sim_li4: "現在は166モデルを対象に寸法補正と物理属性生成を含む処理フローを構築",
    scale_figcap: "Real-to-Simモデリング安定性テスト: 実環境と生成された仮想環境の比較。",
    odin_figcap: "別ケースでのReal-to-Sim安定性テスト: 仮想再現の一貫性を確認。",
    agents_kicker: "第2の柱 · Prime Agent / Slave Agent",
    agents_title: "複数ロボット作業のためのAIネイティブ産業システム",
    agents_intro:
      "Prime Agentが全体のタスク計画、資源割当、スケジューリング、形式検証を担い、Slave Agentが各ロボットの移動、センシング、操作を実行します。",
    agents_subtitle: "LLM単独制御ではなく、信頼できる計画へ",
    agents_body:
      "Prime Agentは自然言語理解、PDDL計画、PPLTL時相論理、DAG並列化、モデル検査を統合します。目的は計画を生成するだけでなく、実行前にタスク目標と産業現場のルールを満たすことを検証することです。",
    sim2real_kicker: "第3の柱 · Sim-to-Real",
    sim2real_title: "検証済み知能を仮想ロボットと実機ロボットへ展開する",
    sim2real_intro:
      "Sim-to-Realでは、訓練・検証した行動をGo2、ロボットアーム、各種センサ、ROS 2/Nav2、Jetsonエッジ計算、点検管理アプリへ接続します。",
    sim2real_figcap: "実機ロボット運用と現場点検シナリオ。",
    sim2real_subtitle: "シミュレーション実行から現場対応ロボットモジュールへ",
    sim2real_body:
      "システムにはGo2ナビゲーション、地図・経路表示、ウェイポイント管理、点検タスクのスケジュール実行、Isaac Simでの画像取得、ロボットアーム導入、Rviz接続、Isaac Labへのショールームモデル導入が含まれます。",
    interaction_kicker: "第4の柱 · 物理・仮想インタラクション",
    interaction_title: "現場センシングからデジタルツインへ戻る閉ループ",
    interaction_intro:
      "最終層はSim-to-Real-to-Simです。実機ロボットが現場変化を検知し、物体姿勢の更新や新規資産生成を行い、更新された仮想環境上でPrime Agentが再計画します。",
    interaction_figcap: "現場変化を検出・位置同定し、Isaac Simへ段階的に反映する流れ。",
    interaction_subtitle: "全シーンを作り直さず、変化部分だけを更新",
    interaction_body:
      "現在の設計では、移動・新規・消失した物体を区別します。移動物体は姿勢のみ更新し、新規物体は測定、3D生成または検索、USD追加を行い、更新シーンの衝突、重なり、経路遮断を検証します。",
    evidence_kicker: "統合的な成果",
    evidence_title: "モデリング、知能、実装、インタラクションにまたがる進捗",
    metric_pillars_label: "統合された4本柱",
    metric_pillars_text: "Real-to-Sim、AIネイティブエージェントシステム、Sim-to-Real、物理・仮想インタラクション。",
    metric_models_label: "モデル処理規模",
    metric_models_text: "Odin1を用いた認識、測定、3D生成、補正、属性付与の処理フロー。",
    metric_prime_label: "Prime Agent E2E成功率",
    metric_prime_text: "形式的計画パイプラインにより、LLM単独ベースラインより高い成功率を確認。",
    metric_go2_label: "シミュレーション内Go2",
    metric_go2_text: "Isaac Sim上で複数Go2ロボットのナビゲーション実行を確認し、統合検証へ進行中。",
    pub_kicker: "論文",
    pub_title: "プロジェクトから発表した会議論文",
    pub_lead:
      "paperフォルダには、屋内再構成、Real-to-Sim資産生成、異種複数ロボットタスク計画、検証用シンボリック環境モデリングに関する成果を掲載しています。",
    roadmap_kicker: "2025-2027ロードマップ",
    roadmap_title: "AIネイティブ・インテリジェント工場へ",
    roadmap_2025_title: "基盤構築",
    roadmap_2025_text:
      "H100/RTX計算基盤、Isaac/Gazebo/Genesis環境、Go2試作、SLAMナビ、初期のマルチエージェント制御を構築。",
    roadmap_2026_title: "ドメイン実装",
    roadmap_2026_text:
      "造船所・ボイラー室のデジタルツイン、Prime/Slave Agent訓練、管理アプリ連携、現場センシングを実装。",
    roadmap_2027_title: "運用検証",
    roadmap_2027_text:
      "実産業現場での複数ロボット点検、配送、異常通知、デジタルツイン駆動の再計画を検証。",
    team_kicker: "メンバーとパートナー",
    team_title: "産業実装パートナーと連携する大学研究室発の研究",
    team_lead:
      "本プロジェクトは愛媛大学の研究者が主導し、実装現場の文脈、現場要求、ロボティクス実装支援を提供する産業パートナーと共同で推進しています。",
    team_ehime: "大学院理工学研究科 計算機システム研究室",
    team_taiyo: "産業連携とロボット活用現場の文脈提供",
    team_mirabot: "ロボティクス連携とPhysical AI実装支援",
    team_leadership_title: "プロジェクトリーダー",
    team_photo_caption: "ITC-CSCC 2026に参加した研究チーム。",
    team_researchers_title: "学生研究メンバー",
    bio_wang_role: "研究代表 / コンピュータシステム",
    bio_wang_text:
      "王 森レイ博士は愛媛大学大学院理工学研究科の講師で、本プロジェクトを主導しています。ディペンダブルコンピュータシステム、VLSIテスト・故障診断、リコンフィギュラブルコンピューティング、ハードウェアセキュリティ、機械学習を活用したテスト・信頼性技術を研究してきました。これらのシステム研究を基盤に、環境モデリング、検証可能なAIエージェント計画、ロボットシミュレーション、産業現場実証をつなぐデジタルツイン／Physical AI基盤を開発しています。",
    bio_takahashi_role: "プロジェクトディレクター / コンピュータシステム",
    bio_takahashi_text:
      "高橋寛教授は愛媛大学大学院理工学研究科に所属し、本プロジェクトのディレクターを務めています。コンピュータシステムの設計・テスト、VLSIの故障検査・診断、ディペンダブル／フォールトトレラントコンピューティング、リコンフィギュラブルロジック、ハードウェアセキュリティに関する長年の研究実績を持ちます。本プロジェクトでは、信頼できる計算機システム、形式検証、デジタルツイン、産業ロボティクスを統合するための学術的・システム的リーダーシップを担っています。",
    member_li_role: "組込みシステム / Real-to-Sim",
    member_li_bio:
      "Kerun Liは、愛媛大学大学院理工学研究科博士前期課程2年に在籍し、組込みシステム開発を専門としています。本プロジェクトでは、ロボットのSLAM・ナビゲーション、コンピュータビジョン、生成AI、Real-to-Simによる3次元シーン再構築に取り組んでいます。単一写真からのReal-to-Simパイプラインに関する論文の筆頭著者として、実世界の観測を再利用可能な3D資産と物理的に妥当なシミュレーションシーンへ変換する手法を研究しています。実用新案2件、意匠登録2件、ソフトウェア著作権1件を取得し、発明特許1件が審査中です。学部在学中には浙江省優秀卒業生に選出され、浙江省政府奨学金を受賞しました。",
    member_kuzuhara_role: "サイバーセキュリティ / 形式検証",
    member_kuzuhara_bio:
      "Tomoki Kuzuharaは、愛媛大学大学院理工学研究科博士前期課程2年に在籍し、サイバーセキュリティを専門としています。本プロジェクトでは、Prime Agentの実装・検証と産業現場のナレッジベース構築を担当しています。Env2FSAに関する論文の筆頭著者として、視覚グラウンディング、PDDLと整合する記号的環境モデル、反例に基づくロボット行動コントローラの形式検証を研究しています。",
    member_ono_role: "画像処理 / 環境モデリング",
    member_ono_bio:
      "Shintaro Onoは、愛媛大学大学院理工学研究科博士前期課程2年に在籍し、画像処理技術を専門としています。本プロジェクトでは、実環境の静的空間モデル生成、アナログメータのデジタル化、現場内の変化検知に取り組んでいます。屋内再構成手法の比較研究に関する論文の筆頭著者として、LiDAR点群からシミュレーション可能な静的形状を生成するBEV、Heightmap、平面ベース手法を評価しています。",
    member_shen_role: "プランニング最適化 / 複数ロボット",
    member_shen_bio:
      "Jingjing Shenは、愛媛大学大学院理工学研究科博士前期課程2年に在籍し、プランニング最適化を専門としています。本プロジェクトでは、行為プランニングエージェントの設計と検証を担当しています。言語駆動型の異種複数ロボット計画に関する論文の筆頭著者として、自然言語タスク分解、能力制約を考慮したチーム編成・タスク割当、構造化経験メモリ、実行フィードバックに基づく計画修復を研究しています。",
    link_researchmap: "researchmap",
    link_google_scholar: "Google Scholar",
    link_kaken: "KAKEN",
    reach_kicker: "グローバルリーチ",
    reach_title: "世界から本研究へのアクセス",
    reach_lead: "2026年7月24日の計測開始以降のページビューと国別アクセスを集計しています。",
    reach_total_label: "総ページビュー",
    reach_updated: "定期的に更新",
    reach_privacy: "Cookieを使わない集計型アクセス解析です。IPアドレスは保存されません。",
    reach_countries_title: "国別アクセス",
    reach_countries_text: "国別・ページ別の集計アクセス状況を確認できます。",
    reach_open_dashboard: "ダッシュボードを開く",
    footer_note: "プライバシーに配慮した集計型アクセス解析を採用している公開研究サイトです。",
    contact_title: "共同研究を歓迎します",
    contact_text:
      "産業デジタルツイン、AIネイティブ工場、フィールドロボティクス、複数ロボット計画、Sim-to-Real検証、物理・仮想インタラクションに関心のあるパートナーを歓迎します。",
    contact_button: "研究室へ連絡",
    videos_kicker: "研究動画インデックス",
    videos_title: "動画",
    videos_lead:
      "プロジェクトのデモ動画のうち、公開に適したものだけを掲載しています。内部進捗報告用や未完成の開発動画は、このページから意図的に除外しています。",
    videos_note:
      "一部のMOVファイルはブラウザによって再生できない場合があります。再生できない場合は各カードの直接リンクを開いてください。"
  },
  zh: {
    nav_overview: "概览",
    nav_real2sim: "Real-to-Sim",
    nav_agents: "AI智能体",
    nav_sim2real: "Sim-to-Real",
    nav_interaction: "物理虚拟交互",
    nav_papers: "论文",
    nav_reach: "访问统计",
    nav_videos: "视频",
    hero_eyebrow: "爱媛大学计算机系统研究室 · 太阳诱电 · Mirabot",
    hero_title: "用数字孪生弥合工业Physical AI落地鸿沟",
    hero_subtitle:
      "工业机器人仍然面临现场变化快、无法安全试错、AI计划难以验证等问题。本研究将数字孪生定位为AI原生工业机器人系统的训练、验证和反馈层。",
    hero_cta_platform: "查看平台",
    hero_cta_video: "观看视频",
    hero_cta_collab: "合作研究",
    strip_paper: "论文",
    strip_video: "视频",
    overview_kicker: "研究概览",
    overview_title: "让工业机器人在行动前先安全学习和验证",
    overview_lead:
      "研究面向工厂、船厂、锅炉房和巡检现场等真实机器人测试成本高、风险大且强依赖环境的场景。项目构建闭环Physical AI平台: 建模现场、验证多机器人计划、部署到实体机器人，并将现场变化反馈回仿真。",
    mission_problem_label: "课题",
    mission_problem_title: "工业AI不能依赖现场试错",
    mission_problem_text: "真实现场持续变化，机器人失败成本高，仅靠LLM控制也难以在部署前完成可靠验证。",
    mission_position_label: "定位",
    mission_position_title: "数字孪生成为Physical AI的运行层",
    mission_position_text:
      "Real-to-Sim、Prime/Slave Agent、Sim-to-Real和Sim-to-Real-to-Sim被整合为工业机器人智能闭环。",
    mission_goal_label: "目标",
    mission_goal_title: "面向AI原生工业机器人系统的可验证自主性",
    mission_goal_text:
      "目标是让机器人理解作业现场、安全规划、执行任务，并基于现场证据持续更新数字孪生。",
    lab_video_kicker: "实体机器人展示",
    lab_video_title: "爱媛大学AI智能体机器人“HIME”",
    lab_video_text:
      "HIME是由本研究室开发的机器人平台，融合了我们在AI智能体、自主导航和实体机器人系统方面的研究。",
    lab_video_caption: "研究室开发的AI智能体机器人“HIME”介绍视频。",
    card_real2sim_title: "Real-to-Sim",
    card_real2sim_text: "将真实工业空间、物体、尺寸和布局转换为可用于仿真的资产。",
    card_agents_title: "AI原生工业系统",
    card_agents_text: "使用Prime Agent和Slave Agent架构进行任务规划、调度、验证和执行。",
    card_sim2real_title: "Sim-to-Real",
    card_sim2real_text: "在物理部署前训练和验证导航、巡检与操作行为。",
    card_interaction_title: "Sim-to-Real-to-Sim",
    card_interaction_text: "感知现场变化，评估机器人行为，并增量更新虚拟环境。",
    real2sim_kicker: "支柱01 · Real-to-Sim",
    real2sim_title: "从真实世界数据生成可仿真的工业环境",
    real2sim_intro:
      "Real-to-Sim构建可复用的数字孪生资产，包括静态空间、物体级3D模型、物理属性、尺度校正和自动布局生成。",
    real2sim_figcap: "将真实世界数据转换为仿真资产的Real-to-Sim动态流程。",
    real2sim_subtitle: "从单图初始化到多传感器实尺度重建",
    real2sim_body:
      "我们的ITC-CSCC 2026论文展示了如何从单张照片生成可复用3D资产和初始布局。当前工作进一步扩展到Odin1的LiDAR、RGB和IMU，从尺寸估计推进到基于实测数据的尺度约束。",
    real2sim_li1: "在9个类别、86个物体实例上评估尺度精度",
    real2sim_li2: "单图基线的平均尺度误差为11.96%",
    real2sim_li3: "50次放置实验中空间关系与无碰撞成功率达到100%",
    real2sim_li4: "当前流程覆盖166个模型，并包含尺寸校正与物理属性生成",
    scale_figcap: "Real-to-Sim建模稳定性测试: 对比真实场景和生成的虚拟场景。",
    odin_figcap: "第二个Real-to-Sim稳定性测试: 展示虚拟重建的一致性。",
    agents_kicker: "支柱02 · Prime Agent / Slave Agent",
    agents_title: "面向多机器人作业的AI原生工业系统",
    agents_intro:
      "Prime Agent负责全局任务规划、资源分配、调度和形式化验证，Slave Agent负责各机器人本地导航、感知和操作。",
    agents_subtitle: "不是直接用LLM控制，而是构建可信任务规划",
    agents_body:
      "Prime Agent整合自然语言理解、PDDL规划、PPLTL时序逻辑、DAG并行化和模型检查。目标不仅是生成计划，更是在执行前验证机器人行为满足任务目标和工业规则。",
    sim2real_kicker: "支柱03 · Sim-to-Real",
    sim2real_title: "将已验证的智能部署到仿真和实体机器人",
    sim2real_intro:
      "Sim-to-Real将训练和验证后的行为连接到Go2、机械臂、传感器、ROS 2/Nav2、Jetson边缘计算和巡检管理软件。",
    sim2real_figcap: "实体机器人运行和面向现场的巡检场景。",
    sim2real_subtitle: "从仿真任务执行到面向现场的机器人模块",
    sim2real_body:
      "系统已经包括Go2导航、地图和路径显示、航点管理、定时巡检任务、Isaac Sim图像采集、机械臂导入、Rviz连接以及showroom模型导入Isaac Lab。",
    interaction_kicker: "支柱04 · 物理虚拟交互",
    interaction_title: "从现场感知回到数字孪生的闭环",
    interaction_intro:
      "最终层是Sim-to-Real-to-Sim: 实体机器人感知现场变化，更新物体位姿或生成新资产，并让Prime Agent在更新后的虚拟环境中重新规划。",
    interaction_figcap: "现场变化被检测、定位，并增量反映到Isaac Sim中。",
    interaction_subtitle: "不重建整个场景，只更新发生变化的部分",
    interaction_body:
      "当前设计区分移动、新增和消失物体。移动物体只更新位姿；新增物体触发测量、3D生成或检索以及USD插入；更新后的场景会检查碰撞、重叠和路径阻塞。",
    evidence_kicker: "综合证据",
    evidence_title: "建模、智能、部署和交互方向的整体进展",
    metric_pillars_label: "四个集成支柱",
    metric_pillars_text: "Real-to-Sim、AI原生智能体系统、Sim-to-Real和物理虚拟交互。",
    metric_models_label: "模型流程规模",
    metric_models_text: "基于Odin1的识别、测量、3D生成、校正和属性生成流程。",
    metric_prime_label: "Prime Agent端到端成功率",
    metric_prime_text: "形式化规划流程在评估任务中优于仅使用LLM的基线。",
    metric_go2_label: "仿真中的Go2机器人",
    metric_go2_text: "已在Isaac Sim中验证多机器人导航执行，作为下一阶段集成目标。",
    pub_kicker: "论文",
    pub_title: "项目产出的会议论文",
    pub_lead:
      "paper文件夹包含面向学术交流的成果，覆盖室内重建、Real-to-Sim资产生成、异构多机器人任务规划以及用于验证的符号环境建模。",
    roadmap_kicker: "2025-2027路线图",
    roadmap_title: "迈向AI原生智能工厂",
    roadmap_2025_title: "基础平台建设",
    roadmap_2025_text:
      "建设H100/RTX计算基础设施、Isaac/Gazebo/Genesis环境、Go2原型、SLAM导航和初步多智能体机器人控制。",
    roadmap_2026_title: "领域实现",
    roadmap_2026_text:
      "推进船厂和锅炉房数字孪生、Prime/Slave Agent训练、管理应用集成以及现场感知反馈。",
    roadmap_2027_title: "运行验证",
    roadmap_2027_text:
      "在真实工业现场验证多机器人巡检、配送、异常报告以及数字孪生驱动的重新规划。",
    team_kicker: "人员与合作伙伴",
    team_title: "由大学研究室与产业部署伙伴共同推进",
    team_lead:
      "本项目由爱媛大学研究人员主导，并与提供机器人部署场景、现场需求和实现支持的产业伙伴共同推进。",
    team_ehime: "理工学研究科 计算机系统研究室",
    team_taiyo: "产业合作与机器人应用现场支持",
    team_mirabot: "机器人技术合作与Physical AI实现支持",
    team_leadership_title: "项目负责人",
    team_photo_caption: "参加ITC-CSCC 2026的研究团队。",
    team_researchers_title: "学生研究成员",
    bio_wang_role: "项目负责人 / 计算机系统",
    bio_wang_text:
      "王森岭博士现任爱媛大学大学院理工学研究科讲师，并负责领导本项目。他长期研究可信计算机系统、VLSI测试与故障诊断、可重构计算、硬件安全，以及机器学习辅助的测试与可靠性技术。以这些系统研究为基础，他正在开发连接环境建模、可验证AI智能体规划、机器人仿真和工业现场验证的数字孪生与Physical AI平台。",
    bio_takahashi_role: "项目主任 / 计算机系统",
    bio_takahashi_text:
      "高桥宽教授现任爱媛大学大学院理工学研究科教授，并担任本项目主任。他长期研究计算机系统设计与测试、VLSI故障测试与诊断、可信与容错计算、可重构逻辑和硬件安全。在本项目中，他为可靠计算、形式化验证、数字孪生与工业机器人技术的融合提供学术和系统层面的领导。",
    member_li_role: "嵌入式系统 / Real-to-Sim",
    member_li_bio:
      "Kerun Li现为爱媛大学大学院理工学研究科硕士二年级学生，专长为嵌入式系统开发。在本项目中，他开展机器人SLAM与导航、计算机视觉、生成式AI以及基于Real-to-Sim的三维场景重建研究。作为单张照片Real-to-Sim流程论文的第一作者，他研究将真实观测转换为可复用三维资产和物理合理仿真场景的方法。他已取得2项实用新型、2项外观设计注册和1项软件著作权，另有1项发明专利申请正在审查中。本科期间，他曾获评浙江省优秀毕业生并获得浙江省政府奖学金。",
    member_kuzuhara_role: "网络安全 / 形式化验证",
    member_kuzuhara_bio:
      "Tomoki Kuzuhara现为爱媛大学大学院理工学研究科硕士二年级学生，专长为网络安全。在本项目中，他负责Prime Agent的实现与验证，并构建工业现场知识库。作为Env2FSA论文的第一作者，他研究视觉语义落地、与PDDL一致的符号环境建模，以及基于反例引导的机器人行为控制器形式化验证。",
    member_ono_role: "图像处理 / 环境建模",
    member_ono_bio:
      "Shintaro Ono现为爱媛大学大学院理工学研究科硕士二年级学生，专长为图像处理。在本项目中，他开展真实环境静态空间模型生成、模拟仪表数字化和现场变化检测研究。作为室内重建方法比较研究论文的第一作者，他评估从LiDAR点云生成可用于仿真的静态几何模型的BEV、Heightmap和平面方法。",
    member_shen_role: "规划优化 / 多机器人系统",
    member_shen_bio:
      "Jingjing Shen现为爱媛大学大学院理工学研究科硕士二年级学生，专长为规划优化。在本项目中，她负责行为规划智能体的设计与验证。作为语言驱动异构多机器人规划论文的第一作者，她研究自然语言任务分解、能力约束下的团队构成与任务分配、结构化经验记忆，以及基于执行反馈的计划修复。",
    link_researchmap: "researchmap",
    link_google_scholar: "Google Scholar",
    link_kaken: "KAKEN",
    reach_kicker: "全球传播",
    reach_title: "世界各地对本研究的关注",
    reach_lead: "汇总展示自2026年7月24日启用统计以来的页面浏览量和国家分布。",
    reach_total_label: "总页面浏览量",
    reach_updated: "定期更新",
    reach_privacy: "采用无Cookie的汇总统计，不保存IP地址。",
    reach_countries_title: "访问国家分布",
    reach_countries_text: "查看按国家和页面汇总的访问情况。",
    reach_open_dashboard: "打开统计面板",
    footer_note: "采用保护隐私的汇总访问统计的公开研究网站。",
    contact_title: "欢迎合作研究",
    contact_text:
      "我们欢迎对工业数字孪生、AI原生工厂、现场机器人、多机器人规划、Sim-to-Real验证和物理虚拟交互感兴趣的合作伙伴。",
    contact_button: "联系研究室",
    videos_kicker: "研究视频索引",
    videos_title: "视频",
    videos_lead:
      "本页只展示适合公开发布的项目演示视频。内部进展汇报和未完成开发片段已被有意排除。",
    videos_note:
      "部分MOV文件可能无法在某些浏览器中播放。若播放失败，请使用每个卡片下方的直接文件链接。"
  }
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) node.textContent = dictionary[key];
  });
  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  localStorage.setItem("dtpa-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("dtpa-lang") || "en";
  applyLanguage(saved);
  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
});
