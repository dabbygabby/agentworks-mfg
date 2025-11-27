export const meetingLink = "https://cal.com/rabnoor-singh/30min";
export const whatsappLinkSheetMetalQuoting = "https://wa.me/919663097918?text=Hi%2C%20I%20want%20to%20deploy%20the%20Sheet%20Metal%20Quoting%20Agent.%20How%20do%20we%20start%3F"

//whatsappMessages

export const finalCTAMessage = "Hello, I am interested in your product and would like to request a callback to know more."
export const sheetMetalQuotingMessage = "Hi, I'm interested in the Sheet Metal Quoting Agent. Can we schedule a quick call to discuss?"
export const packagingPrintingMessage = "Hi, I have a box spec and want to test the Packaging Estimator. Please call me back."
export const electronicsEmsMessage = "Hi, I have a complex BOM for the Sourcing Engine. When are you available for a meeting?"
export const digitalTraceabilityMessage = "Hi, I want to see how Digital Traceability works. Can we set up a quick demo call?"
export const heavyMachineryMessage = "Hi, I want to track Job Costing for my machines. Let's schedule a time to chat."
export const industryChallenge = "Hi, I run a factory in a sector not listed on your site. Can you build a custom agent for my specific workflow?"

export const whatsappLinkGenerator = (text: string) => {
    return `https://wa.me/919663097918?text=${encodeURIComponent(text)}`;
}