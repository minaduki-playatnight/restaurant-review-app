# 食べログ風Webアプリ

Java / Spring Boot を用いて開発した民宿予約Webアプリです。  
ユーザーは民宿を検索・予約することができ、管理者は宿泊施設の登録や予約管理が可能です。

## デモ

URL  
[https://xxxxx](https://nagoyameshi-chihiro-make-956d508ea47c.herokuapp.com/)

### デモアカウント

一般ユーザー  
email: yoshino.test@example.com
password: password

有料ユーザー  
email: sana.test@example.com
password: password

管理者  
email:chihiro.test@example.com
password: password

※デモ用アカウントのため自由にログインしてお試しください。

---

## 主な機能

- ユーザー登録 / ログイン（Spring Security）
- 民宿一覧表示（カードUI）
- 民宿詳細ページ
- 予約機能（30分刻み）
- 予約履歴表示（有料ユーザー）
- Stripe決済
- 管理者による宿泊施設登録 / 編集
- 予約管理機能

---

## 使用技術

| 技術 | 内容 |
|-----|-----|
| Java | 17 |
| Spring Boot | Webアプリ開発 |
| Spring Security | 認証 / 権限管理 |
| Thymeleaf | テンプレートエンジン |
| MySQL | ローカルDB |
| PostgreSQL | Heroku環境 |
| Git / GitHub | ソース管理 |
| Heroku | デプロイ |

---

## システム構成

- MVCアーキテクチャを採用
- ユーザーロールによる権限制御
  - 無料ユーザー
  - 有料ユーザー
  - 管理者

---

## 今後の改善予定

- レスポンシブ対応
- UI改善
- 予約キャンセル機能追加
