interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, image, title }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[250px] rounded-lg shadow-lg p-4 m-4">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="w-full p-3">
        <h2 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-400">
          <b>Valor: </b>
          R$ {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
