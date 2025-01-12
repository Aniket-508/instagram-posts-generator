import { Info } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyApiRequestButton } from "@/components/copy-api-request-button"
import BackgroundForm from "@/components/forms/background-form"
import TemplateForm from "@/components/forms/template-form"
import PreviewRenderer from "@/components/preview-renderer"
import ProjectDetails from "@/components/project-details"
import SaveImageButton from "@/components/save-image-button"
import TemplateSelector from "@/components/template-selector"

export default function Home() {
  return (
    <div className="space-y-4 py-16">
      <ProjectDetails />

      <TemplateSelector />

      <Separator />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="order-last col-span-1 lg:order-first">
          <div className="sticky top-0 space-y-4">
            <TemplateForm />
            <BackgroundForm />
          </div>
        </div>

        <div className="order-first space-y-4 lg:order-last lg:col-span-2">
          <Card className="col-span-2 px-2 md:px-4">
            <div className="overflow-hidden">
              <PreviewRenderer />
            </div>
          </Card>

          <Tabs defaultValue="save">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="save">Save Image</TabsTrigger>
              <TabsTrigger value="api">API Request</TabsTrigger>
            </TabsList>
            <TabsContent value="save">
              <Card>
                <CardHeader>
                  <CardTitle>Save Image</CardTitle>
                  <CardDescription>Export the image as a PNG.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between space-x-2">
                  <div className="flex items-center">
                    <Info className="mr-2 h-4 w-4 flex-shrink-0" />
                    <p className="text-sm">
                      We are yet to support other file formats.
                    </p>
                  </div>

                  <SaveImageButton />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>API Request</CardTitle>
                  <CardDescription>
                    Generate images on the fly with our API.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between space-x-2">
                  <div className="flex items-center">
                    <Info className="mr-2 h-4 w-4 flex-shrink-0" />
                    <p className="text-sm">
                      Copy the request body as JSON or a cURL.
                    </p>
                  </div>

                  <CopyApiRequestButton />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
