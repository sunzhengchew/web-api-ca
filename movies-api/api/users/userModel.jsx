import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true
  }
});

// Compare password
UserSchema.methods.comparePassword = async function (passw) {
  return await bcrypt.compare(passw, this.password);
};

// Find by username
UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username });
};

// Hash password before save
UserSchema.pre('save', async function () {
  const saltRounds = 10;

  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

export default mongoose.model('User', UserSchema);

