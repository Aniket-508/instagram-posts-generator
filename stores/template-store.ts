import { createStore } from "zustand/vanilla"

import { Template, templateDefaults } from "@/lib/templates"

export type TemplateState = Template & {
  previewSvg: string | null
}

export type Actions = {
  setTemplate: (name: Template["name"]) => void
  updateParams: (params: Partial<Template["params"]>) => void
  updateCanvas: (canvas: Partial<Template["canvas"]>) => void
  updatePreviewSvg: (svg: string) => void
}

export const defaultInitState: TemplateState = {
  ...templateDefaults["tatva-india"],
  previewSvg: null,
}

export type TemplateStore = TemplateState & Actions

export const createTemplateStore = (
  initState: TemplateState = defaultInitState
) => {
  return createStore<TemplateStore>()((set) => ({
    ...initState,
    setTemplate: (name) =>
      set({
        ...templateDefaults[name],
      }),
    updateParams: (params) =>
      set(
        (state) =>
          ({
            params: {
              ...state.params,
              ...params,
            },
          }) as Partial<TemplateState>
      ),
    updateCanvas: (canvas) =>
      set((state) => ({
        canvas: {
          ...state.canvas,
          ...canvas,
        },
      })),
    updatePreviewSvg: (svg) => set({ previewSvg: svg }),
  }))
}
