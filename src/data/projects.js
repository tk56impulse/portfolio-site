const projects = [
  {
    id: 1,
    title: "タスク管理アプリ",
    image: "https://source.unsplash.com/400x300/?task,app",
    description: "日々のタスクを管理するCRUDアプリ",
    tech: "React / Firebase",
    background: "学習管理ができていなかったため作成",
    solution: "状態管理をuseStateで整理しUIを改善",
    improvement: "Redux導入と認証機能追加予定",
    github: "https://github.com/sample/task-app"
  },
  {
    id: 2,
    title: "天気アプリ",
    image: "https://source.unsplash.com/400x300/?weather",
    description: "APIを使った天気表示アプリ",
    tech: "React / OpenWeather API",
    background: "APIの理解を深めるため",
    solution: "非同期処理をasync/awaitで整理",
    improvement: "エラーハンドリング強化",
    github: "https://github.com/sample/weather-app"
  }
];

export default projects;