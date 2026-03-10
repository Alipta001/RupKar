import Footer from '@/layout/footer/footer'
import BrandSpotlight from './brandSpotlight'
import BudgetStore from './budgetStore'
import CategoryCircles from './categoryCircle'
import DealOfTheDay from './dealOfTheday'
import HeroSection from './heroSection'
import ProductGrid from './productGrid'

export default function HomePageLayout() {
  return (
    <div className="flex flex-col gap-2">
      <HeroSection />
      <CategoryCircles />
      
      <div className="max-w-[1920px] mx-auto px-4 lg:px-10 w-full flex flex-col gap-12">
        <DealOfTheDay />
        <BudgetStore />
        <BrandSpotlight />
        <ProductGrid />
      </div>
      
      <Footer />
    </div>
  )
}