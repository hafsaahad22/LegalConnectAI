import { users, chatMessages, lawyers, type User, type InsertUser, type ChatMessage, type InsertChatMessage, type Lawyer, type InsertLawyer } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatHistory(limit?: number): Promise<ChatMessage[]>;
  
  getLawyers(): Promise<Lawyer[]>;
  getLawyersBySpecialization(specialization: string): Promise<Lawyer[]>;
  createLawyer(lawyer: InsertLawyer): Promise<Lawyer>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private chatMessages: Map<number, ChatMessage>;
  private lawyers: Map<number, Lawyer>;
  private currentUserId: number;
  private currentChatId: number;
  private currentLawyerId: number;

  constructor() {
    this.users = new Map();
    this.chatMessages = new Map();
    this.lawyers = new Map();
    this.currentUserId = 1;
    this.currentChatId = 1;
    this.currentLawyerId = 1;
    
    // Seed with some lawyers
    this.seedLawyers();
  }

  private seedLawyers() {
    const lawyersData = [
      { name: "Ahmed Ali Khan", specialization: "Criminal Law", region: "Lahore", contact: "+92-300-1234567", experience: 15 },
      { name: "Fatima Sheikh", specialization: "Constitutional Law", region: "Karachi", contact: "+92-321-7654321", experience: 12 },
      { name: "Dr. Yasmeen Hassan", specialization: "Family Law", region: "Islamabad", contact: "+92-345-9876543", experience: 18 },
      { name: "Barrister Ali Zafar", specialization: "Women's Rights", region: "Lahore", contact: "+92-333-1111222", experience: 20 },
      { name: "Advocate Nighat Dad", specialization: "Cyber Law", region: "Lahore", contact: "+92-300-3333444", experience: 10 },
      { name: "Barrister Salman Safdar", specialization: "Digital Rights", region: "Karachi", contact: "+92-321-5555666", experience: 8 },
      { name: "Justice (R) Nasira Javed Iqbal", specialization: "Women's Rights", region: "Islamabad", contact: "+92-345-7777888", experience: 25 },
      { name: "Advocate Hina Jilani", specialization: "Human Rights", region: "Lahore", contact: "+92-300-9999000", experience: 30 }
    ];

    lawyersData.forEach(lawyer => {
      const id = this.currentLawyerId++;
      const lawyerRecord: Lawyer = { ...lawyer, id };
      this.lawyers.set(id, lawyerRecord);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatId++;
    const message: ChatMessage = { 
      ...insertMessage,
      id,
      createdAt: new Date(),
      usedFallback: insertMessage.usedFallback ?? false,
      language: insertMessage.language ?? "en"
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatHistory(limit: number = 50): Promise<ChatMessage[]> {
    const messages = Array.from(this.chatMessages.values());
    return messages
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  async getLawyers(): Promise<Lawyer[]> {
    return Array.from(this.lawyers.values());
  }

  async getLawyersBySpecialization(specialization: string): Promise<Lawyer[]> {
    return Array.from(this.lawyers.values()).filter(
      lawyer => lawyer.specialization.toLowerCase().includes(specialization.toLowerCase())
    );
  }

  async createLawyer(insertLawyer: InsertLawyer): Promise<Lawyer> {
    const id = this.currentLawyerId++;
    const lawyer: Lawyer = { ...insertLawyer, id };
    this.lawyers.set(id, lawyer);
    return lawyer;
  }
}

export const storage = new MemStorage();
