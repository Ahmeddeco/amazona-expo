import ProductCard from "@/components/ProductCard"
import SafeAreaView from "@/components/SafeAreaView"
import { PRODUCTS } from "@/utils/constants"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import { ShoppingCart } from "lucide-react-native"
import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native"

export default function HomeScreen() {
	const router = useRouter()
	const [products, setProducts] = useState(PRODUCTS)
	const [categories, setCategories] = useState<string[]>()
	const [selectedCategory, setSelectedCategory] = useState<string>()

	const handleCategory = () => {
		const categoriesSet = new Set<string>()

		products.forEach((product) => {
			categoriesSet.add(product.category)
		})

		const allCategories = Array.from(categoriesSet)
		setCategories(allCategories)
	}

	const handleCategoryPress = (category: string) => {
		setSelectedCategory(category)
		const filteredProducts = PRODUCTS.filter((product) => product.category === category)
		setProducts(filteredProducts)
	}

	useEffect(() => {
		handleCategory()
	}, [])

	return (
		<SafeAreaView className="flex-1 bg-fantasy">
			<View className="p-4 bg-white shadow-xs justify-between flex-row ">
				<Text className="text-3xl">Amazona</Text>
				<Pressable onPress={() => router.push("/cart")}>
					<ShoppingCart size={24} />
				</Pressable>
			</View>
			<FlatList
				data={products}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={{ gap: 12 }}
				contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 32 }}
				ListHeaderComponent={
					<>
						<Text className="text-cod-gray text-[32px] font-semibold ">Hello, welcome back!</Text>
						<Text className="text-scorpion text-base py-1">Discover curated excellence for your lifestyle.</Text>
						<View className="rounded-2xl overflow-hidden mt-4">
							<Image source={{ uri: PRODUCTS[3].image }} style={{ width: "100%", height: 200 }} />
							<View className="absolute top-36 left-5 flex gap-1 z-10">
								<Text className="font-semibold text-white text-3xl">{PRODUCTS[3].name}</Text>
								<Text className="font-medium text-white text-xl">$ {PRODUCTS[3].price}</Text>
							</View>
							<LinearGradient
								pointerEvents="none"
								colors={["transparent", "rgb(0,0,0,0.85)"]}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 220 }}
							/>
						</View>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View className="flex-row gap-4 mt-4">
								{categories?.map((category, index) => (
									<Pressable
										key={index}
										className={`rounded-full border px-4 py-2 mt-4 ${selectedCategory === category ? "bg-black" : "bg-white border-gray-300"}`}
										onPress={() => handleCategoryPress(category)}
									>
										<Text className={`text-sm ${selectedCategory === category ? "text-white" : "text-black"} `}>
											{category}
										</Text>
									</Pressable>
								))}
							</View>
						</ScrollView>
						<Text className="font-medium text-2xl mt-8 mb-4">Featured Products</Text>
					</>
				}
				renderItem={({ item }) => (
					<View className="flex-1">
						<ProductCard product={item} />
					</View>
				)}
			/>
		</SafeAreaView>
	)
}
