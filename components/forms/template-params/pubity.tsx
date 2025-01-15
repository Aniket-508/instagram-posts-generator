import { useTemplateStore } from "@/providers/template-store-provider"

import { Pubity } from "@/lib/templates/pubity"

export function Form() {
  const template = useTemplateStore((state) => state)
  const params = template.params as Pubity["params"]

  return <></>
}
