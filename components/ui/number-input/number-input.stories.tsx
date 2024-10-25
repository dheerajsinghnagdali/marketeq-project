import { Meta, StoryObj } from "@storybook/react"
import { NumberInput } from "@/components/ui"

const meta: Meta = {
  title: "Marketeq-Projects/NumberInput",
}

export default meta

export const Default: StoryObj = {
  render: (args) => <NumberInput {...args} />,
}
