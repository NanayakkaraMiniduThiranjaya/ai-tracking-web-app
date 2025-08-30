import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false, // Not required for OAuth users
  },
  image: {
    type: String,
    required: false,
  },
  emailVerified: {
    type: Date,
    required: false,
  },
  accounts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  }],
  sessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  }],
  // Additional user fields for MediCare
  profile: {
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    phoneNumber: String,
    emergencyContact: {
      name: String,
      phone: String,
      relationship: String,
    },
    medicalInfo: {
      bloodType: String,
      allergies: [String],
      currentMedications: [String],
      chronicConditions: [String],
    }
  },
  preferences: {
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      appointments: { type: Boolean, default: true },
    },
    language: { type: String, default: 'en' },
    theme: { type: String, default: 'dark' },
  }
}, {
  timestamps: true
})

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  providerAccountId: {
    type: String,
    required: true,
  },
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
}, {
  timestamps: true
})

const SessionSchema = new mongoose.Schema({
  sessionToken: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true
})

const VerificationTokenSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
  },
})

// Create indexes
AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true })
SessionSchema.index({ sessionToken: 1 }, { unique: true })
VerificationTokenSchema.index({ identifier: 1, token: 1 }, { unique: true })

export const User = mongoose.models.User || mongoose.model('User', UserSchema)
export const Account = mongoose.models.Account || mongoose.model('Account', AccountSchema)
export const Session = mongoose.models.Session || mongoose.model('Session', SessionSchema)
export const VerificationToken = mongoose.models.VerificationToken || mongoose.model('VerificationToken', VerificationTokenSchema)
