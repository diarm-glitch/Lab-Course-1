const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const customerRoutes = require('./routes/customer.routes');
const vehicleRoutes = require('./routes/vehicle.routes');
const serviceTypeRoutes = require('./routes/serviceType.routes');
const appointmentRoutes = require('./routes/appointment.routes');
const technicianRoutes = require('./routes/technician.routes');
const serviceRecordRoutes = require('./routes/serviceRecord.routes');
const partRoutes = require('./routes/part.routes');
const servicePartRoutes = require('./routes/servicePart.routes');
const invoiceRoutes = require('./routes/invoice.routes');
const serviceReminderRoutes = require('./routes/serviceReminder.routes');
const dashboardRoutes = require('./routes/dashboard.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.use('/customers', customerRoutes);

app.use('/vehicles', vehicleRoutes);

app.use('/appointments', appointmentRoutes)

app.use('/service-types', serviceTypeRoutes);

app.use('/technicians', technicianRoutes);

app.use('/service-records', serviceRecordRoutes);

app.use('/parts', partRoutes);

app.use('/service-parts', servicePartRoutes);

app.use('/invoices', invoiceRoutes);

app.use('/service-reminders', serviceReminderRoutes);

app.use('/dashboard', dashboardRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});