export class TechnicalIntervention {
  constructor(id, complaintId, technicianId, date, status, notes) {
    this.id = id;
    this.complaintId = complaintId;
    this.technicianId = technicianId;
    this.date = date;
    this.status = status;
    this.notes = notes;
  }
}