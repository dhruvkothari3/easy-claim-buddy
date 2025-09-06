import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertTriangle, 
  Download,
  Info
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function AdminImport() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState<{
    success: number;
    failed: number;
    total: number;
    rejectsUrl?: string;
  } | null>(null);

  const { user } = useAuth();
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      if (validTypes.includes(selectedFile.type) || selectedFile.name.endsWith('.csv') || selectedFile.name.endsWith('.xlsx')) {
        setFile(selectedFile);
        setUploadResult(null);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select a CSV or XLSX file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 20;
      });
    }, 200);

    try {
      // Simulate API call - in real implementation, this would POST to the backend
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Simulate results
      const total = Math.floor(Math.random() * 1000) + 100;
      const failed = Math.floor(Math.random() * 50);
      const success = total - failed;

      setUploadProgress(100);
      setUploadResult({
        success,
        failed,
        total,
        rejectsUrl: failed > 0 ? '/demo-rejects.csv' : undefined
      });

      toast({
        title: "Upload completed",
        description: `Processed ${total} records. ${success} successful, ${failed} failed.`,
      });

    } catch (error) {
      console.error('Upload failed:', error);
      toast({
        title: "Upload failed",
        description: "There was an error processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      clearInterval(progressInterval);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setUploadResult(null);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">Admin Only</Badge>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Import Customer Data</h1>
          <p className="text-muted-foreground">Upload CSV or Excel files to import customer and policy data</p>
        </div>

        {/* File Format Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Required File Format
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Please ensure your file contains the following columns in the exact order specified below.
              </AlertDescription>
            </Alert>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Required Columns:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• Loan ID</div>
                <div>• Customer Email ID</div>
                <div>• Loan Start Date</div>
                <div>• Customer Phone number</div>
                <div>• Loan End Date</div>
                <div>• Customer Location (City/Town)</div>
                <div>• Name of the Customer</div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Supported formats:</strong> CSV (.csv), Excel (.xlsx)</p>
              <p><strong>Max file size:</strong> 10MB</p>
              <p><strong>Max records:</strong> 10,000 per file</p>
            </div>
          </CardContent>
        </Card>

        {/* Upload Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload File
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!uploadResult ? (
              <>
                {/* File Selection */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <FileSpreadsheet className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  
                  {!file ? (
                    <>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Choose a file to upload
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Select a CSV or XLSX file containing customer data
                      </p>
                      <input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button variant="outline" className="cursor-pointer">
                          Select File
                        </Button>
                      </label>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        File Selected
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button onClick={resetUpload} variant="outline">
                          Choose Different File
                        </Button>
                        <Button 
                          onClick={handleUpload} 
                          disabled={isUploading}
                        >
                          {isUploading ? 'Uploading...' : 'Upload File'}
                        </Button>
                      </div>
                    </>
                  )}
                </div>

                {/* Upload Progress */}
                {isUploading && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Upload Progress</span>
                      <span className="text-sm text-muted-foreground">{Math.round(uploadProgress)}%</span>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Processing file... This may take a few minutes for large files.
                    </p>
                  </div>
                )}
              </>
            ) : (
              /* Upload Results */
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <h3 className="text-lg font-semibold text-foreground">Upload Completed</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-success/20 bg-success/5">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-success">{uploadResult.success}</div>
                      <div className="text-sm text-muted-foreground">Successful</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-destructive">{uploadResult.failed}</div>
                      <div className="text-sm text-muted-foreground">Failed</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{uploadResult.total}</div>
                      <div className="text-sm text-muted-foreground">Total Records</div>
                    </CardContent>
                  </Card>
                </div>

                {uploadResult.rejectsUrl && (
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="flex items-center justify-between">
                      <span>Some records were rejected. Download the rejects file to see details.</span>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Rejects
                      </Button>
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex gap-4">
                  <Button onClick={resetUpload} variant="outline">
                    Upload Another File
                  </Button>
                  <Button onClick={() => window.location.href = '/admin/search'}>
                    Go to Search
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}