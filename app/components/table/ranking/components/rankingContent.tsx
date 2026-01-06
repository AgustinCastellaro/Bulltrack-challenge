import Button from "@/app/components/button";
import ActiveIndexSection from "./ActiveIndexSection";
import AttributeWeightsSection from "./AttributeWeightsSection";
import ColorGuideSection from "./ColorGuideSection";

export default function RankingContent({ open }: {  open: boolean }) {
    if (!open) return null;

    return (
        <div className="flex flex-col items-start gap-3 pb-4 px-5">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start justify-between pt-4 mx-auto gap-8 border-t border-gray-500 w-full">
                <ActiveIndexSection />
                <div className="w-px h-full bg-[#9F9F9F]" />
                <AttributeWeightsSection />
                <div className="w-px h-full bg-[#9F9F9F]" />
                <ColorGuideSection />
            </div>
            <Button 
                position="right"
                text="Editar criterios"
                color={"var(--color-gray-300)"}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                }
                onChange={() => {}}
                type="secondary"
            />
        </div>
    );
}