import SafeAreaView from "@/components/SafeAreaView"
import { getSubTotalAmount, getTotalAmount } from "@/helper/app.helper"
import { useAmazonaStore } from "@/store/useAmazonaStore"
import { useRouter } from "expo-router"
import { ArrowRight, ChevronLeft, XCircle } from "lucide-react-native"
import { Image, Pressable, ScrollView, Text, View } from "react-native"

export default function CartScreen() {
	const router = useRouter()
	const { cart, removeFromCart } = useAmazonaStore()

	return (
		<SafeAreaView className="bg-fantasy flex-1">
			<View className="p-4 bg-white shadow-xs gap-4 flex-row items-center">
				<Pressable onPress={() => router.back()}>
					<ChevronLeft />
				</Pressable>
				<Text className="text-3xl ">Amazona</Text>
			</View>

			{cart.length === 0 ? (
				<View className="flex items-center justify-center p-4">
					<Text className="text-2xl font-medium ">Cart is Empty</Text>
					<Pressable className="border border-gray-300 px-6 py-2 rounded-xl mt-6 shadow" onPress={() => router.back()}>
						<Text>Go to Home</Text>
					</Pressable>
				</View>
			) : (
				<ScrollView className="p-4">
					<View>
						<Text className="text-cod-gray text-5xl font-semibold">Order Summary</Text>
						<Text className="text-scorpion text-base py-1">Review your selections before payment</Text>
					</View>
					<View className="mt-4 gap-4">
						{cart.map((item, index) => (
							<View key={index} className="bg-white p-4 rounded-xl flex-row justify-between">
								<View className="rounded-xl overflow-hidden">
									<Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
								</View>
								<View className="gap-1 ml-4">
									<Text className="text-xl font-medium line-clamp-1">{item.name}</Text>
									<Text className="text-gray-500">{item.category}</Text>
									<Text className="text-lg font-medium">{item.price}</Text>
								</View>
								<Pressable className="ml-4" onPress={() => removeFromCart(item.id)}>
									<XCircle />
								</Pressable>
							</View>
						))}
					</View>
					<View className="mt-8 bg-soft-peach rounded-xl overflow-hidden">
						<View className="flex-row justify-between items-center">
							<Text className="text-xl text-gray-500">Subtotal ( {cart.length} items )</Text>
							<Text className="text-lg">$ {getSubTotalAmount(cart).toFixed(2)}</Text>
						</View>
						<View className="flex-row items-center justify-between">
							<Text className="text-xl text-gray-500 ">Delivery</Text>
							<Text className="text-lg ">$ 12.00</Text>
						</View>
						<View className="flex-row items-center justify-between">
							<Text className="text-xl text-gray-500 ">Taxes</Text>
							<Text className="text-lg ">$ 34.50</Text>
						</View>
						<View className="bg-gray-300 h-0.5 w-full mt-4" />
						<View className="flex-row items-center justify-between mt-4">
							<Text className="text-2xl font-medium">Total</Text>
							<Text className="text-2xl font-medium">$ {getTotalAmount(cart).toFixed(2)}</Text>
						</View>
					</View>

					<Pressable
						className="bg-black items-center flex-row gap-4 justify-center mt-16 rounded-full px-4 py-6 mb-12"
						onPress={() => {}}
					>
						<Text className="text-white text-lg font-medium">PROCEED TO CHECKOUT</Text>
						<ArrowRight color={"white"} />
					</Pressable>
				</ScrollView>
			)}
		</SafeAreaView>
	)
}
