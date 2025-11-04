export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* GP Initials - Large, bold, medium blue */}
      <text
        x="10"
        y="38"
        fontSize="38"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="#3b82f6"
        letterSpacing="-1"
      >
        GP
      </text>
      
      {/* Gemar Petere - White text, two lines */}
      <text
        x="70"
        y="22"
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        Gemar
      </text>
      <text
        x="70"
        y="38"
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        Petere
      </text>
    </svg>
  )
}

