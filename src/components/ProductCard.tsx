import { useAmazonaStore } from "@/store/useAmazonaStore"
import { IProduct } from "@/types/app.types"
import { Image, Pressable, Text, View } from "react-native"

type Props = {
	product: IProduct
}

export default function ProductCard({ product }: Props) {
	const { addToCart } = useAmazonaStore()

	return (
		<Pressable className="rounded-xl bg-white overflow-hidden">
			<Image source={{ uri: product.image }} style={{ width: "100%", height: 200 }} />
			<View className="p-4 gap-1 ">
				<Text className="text-xl font-medium line-clamp-1">{product.name}</Text>
				<Text className="text-lg font-medium">$ {product.price}</Text>
				<Pressable className="border border-gray-300 rounded-xl py-2 mt-2 shadow" onPress={() => addToCart(product)}>
					<Text className="text-center text-lg font-medium">Add To Cart</Text>
				</Pressable>
			</View>
		</Pressable>
	)
}
