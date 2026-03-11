'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        // user is allowed to update password
      }
    })
  }, [])

  const updatePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Password updated. Redirecting…')
      setTimeout(() => router.replace('/dashboard'), 1500)
    }
  }

  return (
    <main style={{
        minHeight: 'calc(100vh - 120px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Set a new password</h1>

          <input
            type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              style={{ marginBottom: 18 }}
          />

          <button
            className="btn btnPrimary"
            onClick={updatePassword}
            style={{ width: '100%' }}
          >
            Set password
          </button>

          {message && (
            <p style={{ marginTop: 14, color: 'var(--muted)' }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
