import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        Selamat datang to Polri GPT
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div>Click next to start chatting.</div>
    </div>
  )
}