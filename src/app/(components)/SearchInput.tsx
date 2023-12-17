import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function SearchInput({
  onChange,
  value,
  placeholder = 'Search',
}: {
  onChange: (value: string) => void
  value: string
  placeholder?: string
}) {
  return (
    <div className="relative mt-2 rounded-md border-2 border-green-500 bg-black shadow-sm">
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-0 bg-black py-1.5 pr-10 text-green-500 ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {value ? (
          <button onClick={() => onChange('')}>
            <XMarkIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          </button>
        ) : (
          <MagnifyingGlassIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}