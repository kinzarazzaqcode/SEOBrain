import { useState, useCallback } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getToolBySlug } from "@/lib/tools-data"
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Upload, 
  Sparkles, 
  Download,
  ImageIcon,
  FileText,
  Loader2
} from "lucide-react"

export default function ToolDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const tool = slug ? getToolBySlug(slug) : null

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [copied, setCopied] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [settings, setSettings] = useState<Record<string, string | number | boolean>>({})

  if (!tool) {
    return <Navigate to="/tools" replace />
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setUploadedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleProcess = async () => {
    setIsProcessing(true)
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (tool.type === "text") {
      setOutput(`[${tool.name} Output]\n\nProcessed content for: "${input.slice(0, 100)}..."\n\nThis is a demo output. In production, this would be replaced with actual AI-generated content based on your input and selected settings.`)
    } else {
      setOutput("Image processing complete. Your optimized image is ready for download.")
    }
    
    setIsProcessing(false)
  }

  const updateSetting = (label: string, value: string | number | boolean) => {
    setSettings(prev => ({ ...prev, [label]: value }))
  }

  const wordCount = input.split(/\s+/).filter(Boolean).length
  const charCount = input.length

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button & Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/tools" 
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-violet-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Tools
            </Link>
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center shrink-0">
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{tool.name}</h1>
                    <Badge 
                      variant="outline" 
                      className={tool.tier === "Free" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                        : "bg-violet-50 text-violet-700 border-violet-200"
                      }
                    >
                      {tool.tier}
                    </Badge>
                  </div>
                  <p className="text-slate-600 max-w-2xl">{tool.longDescription}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tool Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Input Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {tool.type === "text" ? (
                  // Text Tool Input
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-base font-medium text-slate-900 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-violet-600" />
                        Input
                      </Label>
                      <span className="text-sm text-slate-500">
                        {wordCount} words | {charCount} characters
                      </span>
                    </div>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={tool.placeholder || "Enter your text here..."}
                      className="min-h-[300px] resize-none text-base bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                    />
                  </div>
                ) : (
                  // Image Tool Input
                  <div className="p-6">
                    <Label className="text-base font-medium text-slate-900 flex items-center gap-2 mb-4">
                      <ImageIcon className="w-4 h-4 text-violet-600" />
                      Upload Image
                    </Label>
                    
                    {!previewUrl ? (
                      <div
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-violet-400 transition-colors cursor-pointer"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
                            <Upload className="w-8 h-8 text-violet-600" />
                          </div>
                          <p className="text-lg font-medium text-slate-900 mb-1">
                            Drop your image here
                          </p>
                          <p className="text-sm text-slate-500">
                            or click to browse (PNG, JPG, WebP up to 10MB)
                          </p>
                        </label>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full max-h-[400px] object-contain rounded-xl bg-slate-100"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setUploadedFile(null)
                            setPreviewUrl(null)
                          }}
                          className="absolute top-3 right-3"
                        >
                          Change Image
                        </Button>
                      </div>
                    )}

                    {tool.placeholder && (
                      <div className="mt-4">
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder={tool.placeholder}
                          className="bg-slate-50"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Process Button */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <Button
                    onClick={handleProcess}
                    disabled={isProcessing || (tool.type === "text" ? !input.trim() : !uploadedFile)}
                    className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        {tool.type === "image" ? "Process Image" : "Generate"}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Output Area */}
              {output && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Label className="text-base font-medium text-slate-900">Output</Label>
                      <div className="flex items-center gap-2">
                        {tool.type === "image" && (
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleCopy}
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 mr-2 text-emerald-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 min-h-[150px]">
                      <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans">
                        {output}
                      </pre>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Settings Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Settings</h3>
                
                {tool.settings && tool.settings.length > 0 ? (
                  <div className="space-y-6">
                    {tool.settings.map((setting) => (
                      <div key={setting.label}>
                        <Label className="text-sm font-medium text-slate-700 mb-2 block">
                          {setting.label}
                        </Label>
                        
                        {setting.type === "select" && setting.options && (
                          <Select
                            value={settings[setting.label] as string || setting.default as string}
                            onValueChange={(value) => updateSetting(setting.label, value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {setting.options.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                        
                        {setting.type === "slider" && (
                          <div className="pt-2">
                            <Slider
                              value={[settings[setting.label] as number || setting.default as number]}
                              onValueChange={([value]) => updateSetting(setting.label, value)}
                              min={setting.min}
                              max={setting.max}
                              step={1}
                              className="w-full"
                            />
                            <div className="flex justify-between mt-2 text-xs text-slate-500">
                              <span>{setting.min}</span>
                              <span className="font-medium text-violet-600">
                                {settings[setting.label] || setting.default}
                              </span>
                              <span>{setting.max}</span>
                            </div>
                          </div>
                        )}
                        
                        {setting.type === "toggle" && (
                          <Switch
                            checked={settings[setting.label] as boolean ?? setting.default as boolean}
                            onCheckedChange={(checked) => updateSetting(setting.label, checked)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">
                    No additional settings available for this tool.
                  </p>
                )}

                {/* Pro Upgrade Banner for Free Tools */}
                {tool.tier === "Free" && (
                  <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-100">
                    <h4 className="font-semibold text-slate-900 mb-1">Unlock More Features</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Upgrade to Pro for unlimited usage and advanced features.
                    </p>
                    <Link to="/pricing">
                      <Button size="sm" className="w-full bg-gradient-to-r from-violet-600 to-blue-500 text-white">
                        Upgrade to Pro
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
