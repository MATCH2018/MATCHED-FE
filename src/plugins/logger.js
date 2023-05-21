export default function ({ app }) {
    if (process.env.NODE_ENV !== 'production') {
      // 개발 환경에서만 로깅을 활성화합니다.
      app.config.errorHandler = (err, vm, info) => {
        console.error('Error:', err)
        console.error('Vue instance:', vm)
        console.error('Additional info:', info)
      }
    }
  }