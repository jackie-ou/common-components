import "./App.css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/Accordion";

function App() {
  return (
    <div className={"container"}>
      <Accordion header="Frequently Asked Questions">
        <AccordionItem>
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Why use React?</AccordionTrigger>
          <AccordionContent>
            React makes it easy to create interactive and dynamic UIs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Is React easy to learn?</AccordionTrigger>
          <AccordionContent>
            Yes, React is beginner-friendly, especially if you know JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

{
  /* <Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other
      components&apos; aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It&apos;s animated by default, but you can disable it if you
      prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion> */
}
export default App;
