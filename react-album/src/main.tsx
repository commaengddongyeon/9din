import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// index.css 파일을 삭제했으므로 import 구문을 제거해야 합니다.
// import './index.css'; // 이 줄을 제거하세요.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
