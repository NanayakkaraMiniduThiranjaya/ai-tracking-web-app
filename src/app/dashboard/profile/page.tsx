"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { useToast } from "@/hooks/use-toast"
import { Separator } from "@/components/ui/separator"

interface UserProfile {
  dateOfBirth?: string
  gender?: 'male' | 'female' | 'other'
  phoneNumber?: string
  emergencyContact?: {
    name?: string
    phone?: string
    relationship?: string
  }
  medicalInfo?: {
    bloodType?: string
    allergies?: string[]
    currentMedications?: string[]
    chronicConditions?: string[]
  }
}

interface UserPreferences {
  notifications?: {
    email?: boolean
    sms?: boolean
    appointments?: boolean
  }
  language?: string
  theme?: string
}

export default function ProfilePage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  
  const [profile, setProfile] = useState<UserProfile>({})
  const [preferences, setPreferences] = useState<UserPreferences>({
    notifications: {
      email: true,
      sms: false,
      appointments: true,
    },
    language: 'en',
    theme: 'dark',
  })

  const [newAllergy, setNewAllergy] = useState('')
  const [newMedication, setNewMedication] = useState('')
  const [newCondition, setNewCondition] = useState('')

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/user/profile')
      if (response.ok) {
        const data = await response.json()
        setProfile(data.profile || {})
        setPreferences(data.preferences || preferences)
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveProfile = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profile,
          preferences,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Profile updated successfully",
        })
      } else {
        throw new Error('Failed to save profile')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const addToArray = (field: 'allergies' | 'currentMedications' | 'chronicConditions', value: string) => {
    if (!value.trim()) return
    
    setProfile(prev => ({
      ...prev,
      medicalInfo: {
        ...prev.medicalInfo,
        [field]: [...(prev.medicalInfo?.[field] || []), value.trim()]
      }
    }))
  }

  const removeFromArray = (field: 'allergies' | 'currentMedications' | 'chronicConditions', index: number) => {
    setProfile(prev => ({
      ...prev,
      medicalInfo: {
        ...prev.medicalInfo,
        [field]: prev.medicalInfo?.[field]?.filter((_, i: number) => i !== index) || []
      }
    }))
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Icons.spinner className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your basic profile information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={session?.user?.name || ''}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Name is managed by your OAuth provider
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={session?.user?.email || ''}
                disabled
                className="bg-muted"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={profile.dateOfBirth || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, dateOfBirth: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={profile.gender || ''} onValueChange={(value) => 
                setProfile(prev => ({ ...prev, gender: value as 'male' | 'female' | 'other' }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={profile.phoneNumber || ''}
                onChange={(e) => setProfile(prev => ({ ...prev, phoneNumber: e.target.value }))}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
            <CardDescription>
              Add someone to contact in case of emergency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyName">Contact Name</Label>
              <Input
                id="emergencyName"
                value={profile.emergencyContact?.name || ''}
                onChange={(e) => setProfile(prev => ({
                  ...prev,
                  emergencyContact: { ...prev.emergencyContact, name: e.target.value }
                }))}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyPhone">Contact Phone</Label>
              <Input
                id="emergencyPhone"
                type="tel"
                value={profile.emergencyContact?.phone || ''}
                onChange={(e) => setProfile(prev => ({
                  ...prev,
                  emergencyContact: { ...prev.emergencyContact, phone: e.target.value }
                }))}
                placeholder="+1 (555) 987-6543"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyRelationship">Relationship</Label>
              <Input
                id="emergencyRelationship"
                value={profile.emergencyContact?.relationship || ''}
                onChange={(e) => setProfile(prev => ({
                  ...prev,
                  emergencyContact: { ...prev.emergencyContact, relationship: e.target.value }
                }))}
                placeholder="Spouse, Parent, etc."
              />
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card>
          <CardHeader>
            <CardTitle>Medical Information</CardTitle>
            <CardDescription>
              Keep your medical details up to date
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bloodType">Blood Type</Label>
              <Select value={profile.medicalInfo?.bloodType || ''} onValueChange={(value) =>
                setProfile(prev => ({
                  ...prev,
                  medicalInfo: { ...prev.medicalInfo, bloodType: value }
                }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select blood type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Allergies */}
            <div className="space-y-2">
              <Label>Allergies</Label>
              <div className="flex gap-2">
                <Input
                  value={newAllergy}
                  onChange={(e) => setNewAllergy(e.target.value)}
                  placeholder="Add allergy"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addToArray('allergies', newAllergy)
                      setNewAllergy('')
                    }
                  }}
                />
                <Button 
                  type="button" 
                  onClick={() => {
                    addToArray('allergies', newAllergy)
                    setNewAllergy('')
                  }}
                  size="sm"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.medicalInfo?.allergies?.map((allergy, index) => (
                  <Badge key={index} variant="secondary" className="gap-1">
                    {allergy}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground"
                      onClick={() => removeFromArray('allergies', index)}
                    >
                      ×
                    </Button>
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Customize your app experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Notifications</h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifs">Email Notifications</Label>
                <Switch
                  id="emailNotifs"
                  checked={preferences.notifications?.email || false}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, email: checked }
                    }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="appointmentNotifs">Appointment Reminders</Label>
                <Switch
                  id="appointmentNotifs"
                  checked={preferences.notifications?.appointments || false}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, appointments: checked }
                    }))
                  }
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select value={preferences.language || 'en'} onValueChange={(value) =>
                setPreferences(prev => ({ ...prev, language: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button onClick={saveProfile} disabled={isSaving}>
          {isSaving && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
      </div>
    </div>
  )
}
