import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between">
      <h1 className="text-lg font-semibold">Marcelo Lemes</h1>
      <div className="flex">
        <div className="flex justify-between items-center gap-3">
          <a href="mailto:email@provedor.com.br">marceloaflemes@gmail.com</a>
          <a href="https://github.com/marceloafl" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/marceloafl/" target="_blank">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
