import Form from "@/components/Form"
import FormFooter from "@/components/FormFooter"
import HomeBanner from "@/components/HomeBanner"

export default async function Home() {

  const getActivities = await fetch("https://demos.inbonis.com/api-coach-es-informa/activities")
  const activities = await getActivities.json()
  activities.shift()

  return (
    <>
      <HomeBanner />
      <Form activities={activities} />
      <FormFooter />
    </>
  )
}
