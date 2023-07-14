import Dragger from "../Dragger";
import BaseSection from "../Section";
import { projects } from "./projects"

export default function RecentProjects(){
  const sectionTitle = "Trabalhos recentes";
  return (
    <BaseSection title={sectionTitle}>
      <Dragger list={projects}/>
    </BaseSection>
  )
}