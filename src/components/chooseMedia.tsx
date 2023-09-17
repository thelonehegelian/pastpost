import Image from 'next/image'

interface ChooseMediaProps {
  img: string
  title: string
  description: string
  buttonText: string
  onClick: () => void
}


export default function ChooseMedia({ img, title, description, buttonText }: ChooseMediaProps): JSX.Element {
  return (

    <div className="flex h-48 w-1/2 items-center rounded-xl bg-gray-300">
      <div className="h-full w-1/3 bg-red-500 rounded-xl">
        <div >
          <Image src={img} alt={img} />
        </div>
      </div>

      <div className="h-full w-1/2 flex flex-col">
        <h1>

          {title}
        </h1>
        <p>
          {description}
        </p>

        <button className="btn btn-outline btn-info">{buttonText}</button>

      </div>
    </div>
  )
}
