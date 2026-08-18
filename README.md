# Hilson

練習用 Nx monorepo，包含 Next.js 主應用與共用 UI 元件庫。

## 技術棧

| 類別 | 技術 |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| UI | React 18 · MUI 6 · Emotion |
| 狀態管理 | Zustand |
| 資料查詢 | TanStack Query |
| 試算表 | ExcelJS |
| 元件開發 | Storybook 8 |
| Monorepo | Nx 20 · pnpm |
| 語言 | TypeScript 5 |

## 專案結構

```
hilson/
├── apps/
│   ├── web/          # Next.js 主應用
│   └── Story/        # Storybook 展示
├── ui/               # 共用 UI 元件庫 (@hilson/ui)
├── eslint.config.js  # Root ESLint 設定
├── .prettierrc       # Prettier 設定
└── package.json
```

## 功能頁面

| 路徑 | 功能 |
| --- | --- |
| `/` | 首頁 — 功能導覽 |
| `/dataFormatter/csvToJson` | 上傳 CSV，轉換為 JSON |
| `/dataFormatter/jsonToCsv` | 輸入 JSON，下載 CSV |
| `/dataFormatter/csvToXlsx` | 上傳 CSV，下載 XLSX |
| `/dataFormatter/xmlToJson` | 即時 XML ↔ JSON 轉換 |
| `/dataFormatter/jsonToXml` | 即時 JSON ↔ XML 轉換 |
| `/editUpload` | 上傳文字檔、線上編輯、下載或 POST 至 API |
| `/login` | 登入頁（placeholder） |

## 環境需求

- Node.js >= 18
- pnpm 9.14.2（已透過 `packageManager` 欄位鎖定）

## 快速開始

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm web:dev

# 啟動 Storybook
pnpm story

# 建置
pnpm build

# 執行 Lint
pnpm lint
```

## 環境變數

| 變數 | 說明 |
| --- | --- |
| `POSTGRES_URL` | `@vercel/postgres` 連線字串（僅 `/api/hello` 使用） |

> 未設定 `POSTGRES_URL` 時，`/api/hello` 將回傳 500 錯誤，其餘頁面不受影響。

## Nx 常用指令

```bash
# 產生新的 React 元件庫
pnpm nx g @nx/react:lib [LIB_NAME]

# 產生新元件
pnpm nx g @nx/react:component [COMPONENT_NAME] --project=[LIB_NAME] --export

# 範例
pnpm nx g @nx/react:component button --directory=ui/src/lib/button --export --skipTests --style=none
```

## Git 規範

採用 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` 新增功能
- `fix:` 修正 bug
- `refactor:` 重構
- `chore:` 雜項
- `docs:` 文件
- `style:` 樣式
- `test:` 測試
