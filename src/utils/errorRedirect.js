export const redirectToError = (code, message) => {
  if (typeof window !== 'undefined') {
    const encodedMessage = encodeURIComponent(message)
    window.location.href = `/error?code=${code}&message=${encodedMessage}`
  }
}

export const redirectToMaintenance = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/error/maintenance'
  }
}

export const redirectToUnauthorized = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/error/unauthorized'
  }
}