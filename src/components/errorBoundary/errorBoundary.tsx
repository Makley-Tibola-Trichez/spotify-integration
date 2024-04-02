import { useNavigate } from "react-router-dom";
import SVGError500 from "../../assets/500.svg";
import { ContentLayout } from "../contentLayout/contentLayout";
import { Button } from "../ui/button";

export default function ErrorBoundary() {
	const navigate = useNavigate();

	const handleNavigate = () => navigate("/home");

	return (
		<ContentLayout>
			<div className="flex h-full flex-col items-center justify-center">
				<img src={SVGError500} alt="Erro status 500" />
				<span className="text-center font-bold text-lg">
					Parece que houve algum problema para atender a sua solicitação
				</span>
				<Button className="mt-8" variant={"outline"} onClick={handleNavigate}>
					Voltar para tela inicial
				</Button>
			</div>
		</ContentLayout>
	);
}
