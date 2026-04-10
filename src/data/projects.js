import nexusImg from "../assets/nexusflow.png";
import logicImg from "../assets/logicdeck.png";

const projects = [
  {
    id: 1,
    title: "NexusFlow（開発中）",
    image: nexusImg,
    description:
      "タスクの実行と意思決定を統合したワークフロー管理アプリを開発中です。",
    tech: ["React", "Firebase", "CSS"],
    background:
      "業務や学習の中で、タスク管理と優先順位の判断が分離しており、意思決定に時間がかかる課題がありました。",
    solution:
      "前身アプリであるLogicDeckの設計を見直し、タスクと評価ロジックを統合するアーキテクチャへ再設計しました。",
    improvement:
      "現在はバックエンド連携や認証機能の実装を進め、実用レベルへの改善を行っています。",
    github: "https://github.com/tk56-devlab/nexusflow/"
  },
  
  {
    id: 2,
    title: "LogicDeck（前身）",
    image: logicImg,
    description:
      "タスクの優先順位をロジックに基づいて整理するためのアプリ。",
    tech: ["React" , "JavaScript"],
    background:
      "タスクの優先順位付けを感覚ではなく、ロジックで判断できるようにしたいと考え作成しました。",
    solution:
      "スコアリングによる優先順位付け機能を実装しましたが、タスク管理機能との分離に課題が残りました。",
    improvement:
      "この課題を踏まえ、現在はNexusFlowとして設計を見直し、統合型のアプリとして再構築しています。",
    github: "https://github.com/tk56-devlab/LogicDeck/"
  }
];

export default projects;