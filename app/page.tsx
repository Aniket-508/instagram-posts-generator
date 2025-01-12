import { Info } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyApiRequestButton } from "@/components/copy-api-request-button"
import TemplateForm from "@/components/forms/template-form"
import PreviewRenderer from "@/components/preview-renderer"
import SaveImageButton from "@/components/save-image-button"

export default function Home() {
  return (
    <>
      <div className="order-last col-span-1 space-y-4 lg:order-first">
        <TemplateForm />
      </div>

      <div className="order-first lg:order-last lg:col-span-2">
        <div className="sticky top-0 grow-0 space-y-4">
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
                    <Info className="mr-2 h-4 w-4" />
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
                    <Info className="mr-2 h-4 w-4" />
                    <p className="text-sm">
                      Copy the request body as JSON or a cURL command.
                    </p>
                  </div>

                  <CopyApiRequestButton />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
