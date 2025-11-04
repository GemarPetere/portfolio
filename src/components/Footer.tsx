export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Gemar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

