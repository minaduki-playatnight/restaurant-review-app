# Restaurant Review Web App

Java / Spring Boot を用いて開発した食べログ風レビュー・予約Webアプリです。  
ユーザーは店舗を検索・閲覧し、有料ユーザーは予約機能を利用できます。  
管理者は店舗の登録や予約管理を行うことができます。

---

## デモ

URL  
[https://xxxxx](https://nagoyameshi-chihiro-make-956d508ea47c.herokuapp.com/)

### デモアカウント

| 権限 | email | password |
|-----|------|------|
| 無料ユーザー | yoshino.test@example.com | password |
| 有料ユーザー | sana.test@example.com | password |
| 管理者 | chihiro.test@example.com | password |

※デモ用アカウントのため自由にログインしてお試しいただけます

---

## 主な機能

- ユーザー登録 / ログイン（Spring Security）
- 店舗一覧表示（カード形式UI）
- 店舗詳細ページ
- 予約機能（30分刻み）
- 予約履歴表示（有料ユーザー）
- Stripeによる決済機能
- 管理者による店舗登録 / 編集
- 予約管理機能

---

## 使用技術

| 技術 | 内容 |
|-----|-----|
| Java | 17 |
| Spring Boot | Webアプリケーションフレームワーク |
| Spring Security | 認証 / 権限管理 |
| Thymeleaf | テンプレートエンジン |
| MySQL | ローカルデータベース |
| PostgreSQL | Heroku環境 |
| Git / GitHub | ソース管理 |
| Heroku | アプリケーションデプロイ |
| Stripe API | 決済機能 |

---

## システム構成

MVCアーキテクチャを採用し、以下のユーザーロールによる権限制御を実装しています。

- 無料ユーザー：店舗閲覧のみ可能
- 有料ユーザー：店舗予約・予約履歴確認が可能
- 管理者：店舗登録 / 編集・予約管理が可能

---

## 工夫した点

- 有料ユーザーのみ予約可能とするロールベースアクセス制御を実装
- 予約時間を30分単位で選択できるよう設計
- 外部決済サービス（Stripe）と連携した決済機能を実装
- 管理者画面を作成し、店舗情報を管理できるようにした

---

## 今後の改善予定

- レスポンシブ対応
- UI改善
- 予約キャンセル機能追加
