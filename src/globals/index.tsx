export const meetingLink = "https://cal.com/rabnoor-singh/30min";
export const whatsappLinkSheetMetalQuoting = "https://wa.me/919663097918?text=Hi%2C%20I%20want%20to%20deploy%20the%20Sheet%20Metal%20Quoting%20Agent.%20How%20do%20we%20start%3F"

//whatsappMessages

export const finalCTAMessage = "Hello, I am interested in your product and would like to request a callback to know more."
export const sheetMetalQuotingMessage = "Hi, I want to know more about the Sheet Metal Quoting Agent."
export const packagingPrintingMessage = "Hi, I want to test the Packaging Estimator. I have a box spec."

export const whatsappLinkGenerator = (text: string) => {
    return `https://wa.me/919663097918?text=${encodeURIComponent(text)}`;
}