import MainBanner from "@/components/banner/MainBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProjectList from "@/components/list/ProjectsList";
import Skills from "@/components/list/Skills";
import ThemeWrapper from "@/components/theme-wrapper/ThemeWrapper";
import getOneProfile from "@/actions/profile/getOneProfile";

export default async function Page() {
  const profileId = "66edd9186183a3705f1aa8f4";
  const profile = await getOneProfile(profileId);
  return (
    <ThemeWrapper>
      <div className="max-w-3xl mx-auto p-3">
        <Header
          name={profile.name}
          email={profile.email}
          githubUrl={profile.githubUrl}
          linkedinUrl={profile.linkedinUrl}
        />
        <main>
          <MainBanner title={profile.title} subtitle={profile.subtitle} />
          <ProjectList projects={profile.projects} />
          <Skills skills={profile.skills} />
        </main>
        <Footer
          email={profile.email}
          githubUrl={profile.githubUrl}
          linkedinUrl={profile.linkedinUrl}
        />
      </div>
    </ThemeWrapper>
  );
}
