import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Save, Eye, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function NewArticle() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [readTime, setReadTime] = useState("5");

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", { title, excerpt, content, category, tags, readTime });
    toast({
      title: "Draft saved",
      description: "Your article has been saved as a draft.",
    });
  };

  const handlePublish = () => {
    console.log("Publishing article:", { title, excerpt, content, category, tags, readTime });
    toast({
      title: "Article published",
      description: "Your article is now live and visible to readers.",
    });
  };

  const handlePreview = () => {
    console.log("Opening preview");
    toast({
      title: "Preview mode",
      description: "Preview functionality coming soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 font-display text-4xl font-bold">Create New Article</h1>
              <p className="text-muted-foreground">Share your research and insights with the community</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handlePreview} className="gap-2" data-testid="button-preview">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="outline" onClick={handleSaveDraft} className="gap-2" data-testid="button-save-draft">
                <Save className="h-4 w-4" />
                Save Draft
              </Button>
              <Button onClick={handlePublish} className="gap-2" data-testid="button-publish">
                Publish
              </Button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="space-y-8">
                  <div>
                    <Label htmlFor="title" className="mb-2 text-sm font-semibold">
                      Article Title
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Enter your article title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="text-2xl font-display font-semibold"
                      data-testid="input-title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt" className="mb-2 text-sm font-semibold">
                      Excerpt
                    </Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Brief summary of your article (2-3 sentences)..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      rows={3}
                      className="resize-none"
                      data-testid="input-excerpt"
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      This will appear in article previews and search results
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <Label htmlFor="content" className="text-sm font-semibold">
                        Content
                      </Label>
                      <span className="text-xs text-muted-foreground">Markdown supported</span>
                    </div>
                    <Textarea
                      id="content"
                      placeholder="Write your article content here...&#10;&#10;You can use markdown formatting:&#10;# Heading&#10;## Subheading&#10;**bold** *italic*&#10;- List items&#10;&#10;Start writing your research article..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={20}
                      className="resize-y font-mono text-sm"
                      data-testid="input-content"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="mb-4 font-display text-lg font-semibold">Article Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="category" className="mb-2 text-sm font-semibold">
                      Category
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger id="category" data-testid="select-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gene-therapy">Gene Therapy</SelectItem>
                        <SelectItem value="crispr">CRISPR</SelectItem>
                        <SelectItem value="synthetic-biology">Synthetic Biology</SelectItem>
                        <SelectItem value="immunotherapy">Immunotherapy</SelectItem>
                        <SelectItem value="stem-cells">Stem Cells</SelectItem>
                        <SelectItem value="bioinformatics">Bioinformatics</SelectItem>
                        <SelectItem value="protein-engineering">Protein Engineering</SelectItem>
                        <SelectItem value="drug-discovery">Drug Discovery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="read-time" className="mb-2 text-sm font-semibold">
                      Estimated Read Time (minutes)
                    </Label>
                    <Input
                      id="read-time"
                      type="number"
                      min="1"
                      max="60"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      data-testid="input-read-time"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tags" className="mb-2 text-sm font-semibold">
                      Tags
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        type="text"
                        placeholder="Add a tag..."
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTag();
                          }
                        }}
                        data-testid="input-tag"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handleAddTag}
                        data-testid="button-add-tag"
                      >
                        Add
                      </Button>
                    </div>
                    {tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-1 rounded-sm p-0.5 hover-elevate"
                              data-testid={`button-remove-tag-${tag}`}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4 font-display text-lg font-semibold">Featured Image</h3>
                <div className="space-y-4">
                  <div className="flex aspect-video w-full items-center justify-center rounded-md border-2 border-dashed bg-muted/30">
                    <div className="text-center">
                      <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload image</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full gap-2" data-testid="button-upload-image">
                    <Upload className="h-4 w-4" />
                    Choose Image
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4 font-display text-lg font-semibold">Author</h3>
                <Select defaultValue="current-user">
                  <SelectTrigger data-testid="select-author">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-user">Current User</SelectItem>
                    <SelectItem value="sarah-chen">Dr. Sarah Chen</SelectItem>
                    <SelectItem value="michael-torres">Dr. Michael Torres</SelectItem>
                  </SelectContent>
                </Select>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
