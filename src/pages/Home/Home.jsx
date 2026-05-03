
import Deals from '../../components/Deals/Deals'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import HomeCategories from '../../components/HomeCategories/HomeCategories'
import HomeFeature from '../../components/HomeFeature/HomeFeature'
import Slider from '../../components/Slider/Slider'

export default function Home() {
  return (
    <>
    <Slider/>
    <HomeFeature/>
    <HomeCategories/>
    <Deals/>
    <FeatureProducts/>
    </>
  )
}
