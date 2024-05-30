import react from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface IProps {
    title: any,
    des: any,
    item: string
}

export const FaqSection = () => {

    const AccordionComponent = ({ title, des, item }: IProps) => {
        return (
            <AccordionItem value={item}>
                <AccordionTrigger className="bg-white px-4 rounded-lg py-2 my-[2px]">{title}</AccordionTrigger>
                <AccordionContent className="bg-white px-4">
                    {des}
                </AccordionContent>
            </AccordionItem>
        )
    }
    return (
        <div className=" px-80 py-10 pt-20 ">
            <div>
                <h4>FAQ</h4>
                <h4 className='  py-4  text-[2.3rem] w-[30rem] pb-4'>
                    FREQUENTLY ASKED QUESTIONS
                </h4>
            </div>

            <Accordion type="single" collapsible className="bg-[#8EEDDB] p-10 rounded-lg ">
                <AccordionComponent
                    item="item 1"
                    title="Can I learn and consult on walkmetru? "
                    des="Can I learn and consult on walkmetru? "
                />

                <AccordionComponent
                    item="item 2"
                    title="Can I earn by sharing what I know on Walkmetru? "
                    des="Can I learn and consult on walkmetru?
                    Can I offer group sessions instead of 1-to-1 sessions?
                    Can I offer group sessions instead of 1-to-1 sessions? "
                />
                <AccordionComponent
                    item="item 3"
                    title="What level of experience is required to share knowledge on Walkmetru? "
                    des="Can I learn and consult on walkmetru? "
                />
                <AccordionComponent
                    item="item 4"
                    title="Can I host my own class or session to share my skills?"
                    des="Can I learn and consult on walkmetru? "
                />
                <AccordionComponent
                    item="item 5"
                    title="What if the session or knowledge sharer doesn't meet expectations?"
                    des="Can I learn and consult on walkmetru? "
                />
                <AccordionComponent
                    item="item 6"
                    title="Can I be both a learner and knowledge sharer?"
                    des="Can I learn and consult on walkmetru? "
                />

                <AccordionComponent
                    item="item 7"
                    title="Can I offer group sessions instead of 1-to-1 sessions?"
                    des="Can I learn and consult on walkmetru? "
                />



            </Accordion>
        </div>

    )
}
