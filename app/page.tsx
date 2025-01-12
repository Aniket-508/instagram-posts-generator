import Link from "next/link"
import { Info } from "lucide-react"

import { BUY_ME_A_COFFEE_URL, PORTFOLIO_URL } from "@/lib/routes"
import { Button } from "@/components/ui/button"
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
import SaveImageButton from "@/components/save-image-button"

export default function Home() {
  return (
    <div className="space-y-8 py-16">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">The Tatva India Generator</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Generate 👊 news / 😜 posts for your socials similar to{" "}
          <Button asChild variant="link" className="px-0.5 py-0">
            <Link
              href={"https://www.instagram.com/thetatvaindia/"}
              target="_blank"
            >
              The Tatva India
            </Link>
          </Button>{" "}
          with a few clicks
        </p>
        <div className="flex h-5 items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link
            href={PORTFOLIO_URL}
            target="_blank"
            className="transition-colors hover:text-gray-900 dark:hover:text-gray-200"
          >
            made by aniket
          </Link>
          <Separator orientation="vertical" />
          <Link
            href={BUY_ME_A_COFFEE_URL}
            target="_blank"
            className="transition-colors hover:text-gray-900 dark:hover:text-gray-200"
          >
            buy aniket a coffee
          </Link>
        </div>
      </div>

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
